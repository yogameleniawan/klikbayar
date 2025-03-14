import { create } from 'zustand';

interface CheckoutState {
    checkout: {
        step: { position: number, percent: number },
        customer_no: string,
        phone: string,
        product: {
            product_id: string,
            price: number,
            discount: number,
            margin: number,
            product_name: string,
            price_final: number
        },
        payment: any
    },
    setCheckout: (key: string, value: any) => void,
    updateStep: () => void,
    resetCheckout: () => void,
    canProceedToPayment: () => boolean,
    getCheckoutSummary: () => {
        productId: string,
        productName: string,
        finalPrice: number,
        customerNo: string,
        contactPhone: string,
        paymentMethod: any
    }
}

export const useCheckoutStore = create<CheckoutState>((set, get) => ({
    checkout: {
        step: { position: 0, percent: 0 },
        customer_no: "",
        phone: "",
        product: {
            product_id: "",
            price: 0,
            discount: 0,
            margin: 0,
            product_name: "",
            price_final: 0
        },
        payment: null
    },

    setCheckout: (key, value) => set(state => ({
        checkout: {
            ...state.checkout,
            [key]: value
        }
    })),

    updateStep: () => {
        const { checkout } = get();
        const { product, customer_no, phone, payment } = checkout;

        let position = 0;
        let percent = 0;

        if (product.price > 0) {
            position = 1;
            percent = 25;
        }

        if (position === 1 && customer_no) {
            position = 2;
            percent = 50;
        }

        if (position === 2 && phone) {
            position = 3;
            percent = 75;
        }

        if (position === 3 && payment) {
            position = 4;
            percent = 100;
        }

        set(state => ({
            checkout: {
                ...state.checkout,
                step: { position, percent }
            }
        }));
    },

    resetCheckout: () => set({
        checkout: {
            step: { position: 0, percent: 0 },
            customer_no: "",
            phone: "",
            product: {
                product_id: "",
                price: 0,
                discount: 0,
                margin: 0,
                product_name: "",
                price_final: 0
            },
            payment: null
        }
    }),

    canProceedToPayment: () => {
        const { checkout } = get();
        return checkout.step.position === 4;
    },

    getCheckoutSummary: () => {
        const { checkout } = get();
        return {
            productId: checkout.product.product_id,
            productName: checkout.product.product_name,
            finalPrice: checkout.product.price_final,
            customerNo: checkout.customer_no,
            contactPhone: checkout.phone,
            paymentMethod: checkout.payment
        };
    }
}));
