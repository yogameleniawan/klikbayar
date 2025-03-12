import { formatRupiah } from '@/utils/format_rupiah';
import { Button, Card, CardBody, Input, Select, SelectItem, Switch } from '@nextui-org/react';
import { PlusIcon, XCircleIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const DynamicProductsForm = ({
    data,
    setData,
    processing,
    errors,
    digiflazz_products
}) => {
    const [productItems, setProductItems] = useState(data.products || []);
    const [prices, setPrices] = useState(new Array(data.products?.length || 1).fill(""));

    // Menambahkan useEffect untuk menginisialisasi harga saat komponen pertama kali dimuat
    useEffect(() => {
        if (data.products && data.products.length > 0) {
            const initialPrices = [...prices];

            data.products.forEach((product, index) => {
                if (product.digi_product_id) {
                    const selectedProduct = digiflazz_products.find(item => item.id === product.digi_product_id);
                    if (selectedProduct) {
                        initialPrices[index] = selectedProduct.price;
                    }
                }
            });

            setPrices(initialPrices);
        }
    }, []); // Efek hanya dijalankan saat komponen pertama kali dimuat

    const handleAddProduct = () => {
        const newProducts = [...productItems, { digi_product_id: "", margin: 0, discount: 0, is_active: true }];
        setProductItems(newProducts);
        setData('products', newProducts);
        setPrices([...prices, ""]);
    };

    const handleRemoveProduct = (index) => {
        const updatedProducts = productItems.filter((_, i) => i !== index);
        setProductItems(updatedProducts);
        setData('products', updatedProducts);

        const updatedPrices = [...prices];
        updatedPrices.splice(index, 1);
        setPrices(updatedPrices);
    };

    const handleProductChange = (index, field, value) => {
        const updatedProducts = [...productItems];
        updatedProducts[index][field] = value;
        setProductItems(updatedProducts);
        setData('products', updatedProducts);
    };

    const handlePriceUpdate = (index, priceValue) => {
        const updatedPrices = [...prices];
        updatedPrices[index] = priceValue;
        setPrices(updatedPrices);
    };

    if (productItems.length === 0) {
        handleAddProduct();
    }

    return (
        <Card className="w-full">
            <CardBody className="flex flex-col gap-4">
                {productItems.map((product, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="flex flex-row items-center">
                            <h4 className="text-small font-medium">Product {index + 1}</h4>
                            {index > 0 && (
                                <Button
                                    isIconOnly
                                    size="sm"
                                    variant="light"
                                    className="ml-2"
                                    onPress={() => handleRemoveProduct(index)}
                                >
                                    <XCircleIcon size={16} />
                                </Button>
                            )}
                        </div>
                        <div className="flex flex-row gap-2">
                            <Select
                                items={digiflazz_products.filter((item) => item.category === data.product_category_id)}
                                label="Digiflazz Product"
                                labelPlacement="outside"
                                placeholder="Select a Digiflazz Product"
                                defaultSelectedKeys={product.digi_product_id ? [product.digi_product_id] : []}
                                onChange={(e) => {
                                    handleProductChange(index, "digi_product_id", e.target.value);

                                    const selectedProduct = digiflazz_products.find(item => item.id === e.target.value);
                                    if (selectedProduct) {
                                        handlePriceUpdate(index, selectedProduct.price);
                                    }
                                }}
                            >
                                {(item) => (
                                    <SelectItem key={item.id} textValue={item.product_name}>
                                        <span className="text-small">{item.product_name} - {formatRupiah(item.price)}</span>
                                    </SelectItem>
                                )}
                            </Select>
                            <Input
                                isRequired
                                label="Margin"
                                labelPlacement="outside"
                                placeholder="Enter margin (%) percent"
                                type="number"
                                value={product.margin || 0}
                                defaultValue={0}
                                errorMessage={errors[`products.${index}.margin`] || "Please enter a valid margin"}
                                isInvalid={errors[`products.${index}.margin`]}
                                onChange={(e) => handleProductChange(index, "margin", e.target.value)}
                            />
                            <Input
                                isRequired
                                label="Discount"
                                labelPlacement="outside"
                                placeholder="Enter discount (%) percent"
                                type="number"
                                value={product.discount || 0}
                                errorMessage={errors[`products.${index}.discount`] || "Please enter a valid discount"}
                                isInvalid={errors[`products.${index}.discount`]}
                                onChange={(e) => handleProductChange(index, "discount", e.target.value)}
                            />
                        </div>
                        {(prices[index]) ? (
                            <div className="flex flex-col items-end">
                                <div className="flex justify-between w-72">
                                    <p className="text-xs text-foreground-500">Harga Asli </p>
                                    <p className="text-small text-foreground-500">{formatRupiah(prices[index])}</p>
                                </div>
                                <div className="flex justify-between w-72">
                                    <p className="text-xs text-foreground-500">Harga Margin </p>
                                    <p className="text-small text-foreground-500">{formatRupiah(prices[index] * (1 + parseFloat(product.margin) / 100))}</p>
                                </div>
                                {(() => {
                                    const originalPrice = parseFloat(prices[index]);
                                    const sellingPrice = originalPrice * (1 + parseFloat(product.margin) / 100) * (1 - parseFloat(product.discount) / 100);
                                    const profit = sellingPrice - originalPrice;
                                    const isProfitable = sellingPrice > originalPrice;

                                    return (
                                        <div className="flex justify-between w-72">
                                            <p className={`text-xs ${isProfitable ? 'text-green-500' : 'text-red-500'}`}>
                                                {isProfitable ? 'Keuntungan' : 'Kerugian'}
                                            </p>
                                            <p className={`text-small ${isProfitable ? 'text-green-500' : 'text-red-500'}`}>
                                                {isProfitable ? '+ ' : '- '}{formatRupiah(Math.abs(profit))}
                                            </p>
                                        </div>
                                    );
                                })()}
                                <div className="flex justify-between w-72">
                                    <p className="text-small text-foreground-500 font-bold">Harga Penjualan </p>
                                    <p className="text-small text-foreground-500 font-bold">
                                        {formatRupiah(prices[index] * (1 + parseFloat(product.margin) / 100) * (1 - parseFloat(product.discount) / 100))}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            prices[index] && (
                                <div className="flex justify-between w-72">
                                    <p className="text-xs text-foreground-500">Harga Asli </p>
                                    <p className="text-small text-foreground-500">{formatRupiah(prices[index])}</p>
                                </div>
                            )
                        )}
                        <Switch name="is_active" defaultSelected={product.is_active} size="sm" onValueChange={(isSelected) => handleProductChange(index, "is_active", isSelected)}>
                            Active
                        </Switch>
                    </div>
                ))}

                <div className="flex flex-row gap-2 mt-2">
                    <Button
                        variant="flat"
                        startContent={<PlusIcon size={16} />}
                        onPress={handleAddProduct}
                        disabled={processing}
                    >
                        Add Another Product
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default DynamicProductsForm
