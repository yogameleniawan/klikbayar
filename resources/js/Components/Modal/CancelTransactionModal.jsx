import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { MdOutlineCancel, MdWarning, MdErrorOutline } from 'react-icons/md';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';
import { FiAlertTriangle } from 'react-icons/fi';

export default function CancelTransactionModal({
    transactionId,
    onStatusUpdate,
    checkStatusMutation
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const cancelTransactionMutation = useMutation({
        mutationFn: async () => {
            const response = await axios.post(route('api.transactions.cancel', { id: transactionId }));
            return response.data;
        },
        onSuccess: (response) => {
            onStatusUpdate(response.data.transaction_status);

            addToast({
                title: "Berhasil",
                description: response.message || "Status transaksi berhasil dibatalkan",
                color: "success",
            });

            queryClient.invalidateQueries(['transaction', transactionId]);
        },
        onError: (error) => {
            addToast({
                title: "Hmm, sayang sekali:(",
                description: error.response?.data?.error || 'Gagal membatalkan transaksi',
                color: "danger",
            })
        }
    });

    const handleCancelTransaction = () => {
        cancelTransactionMutation.mutate();
        onOpenChange(false);
    };

    return (
        <>
            <Button
                color="danger"
                startContent={<MdOutlineCancel className="text-lg" />}
                isLoading={cancelTransactionMutation.isPending}
                onPress={onOpen}
                isDisabled={checkStatusMutation.isPending || cancelTransactionMutation.isPending}
                className="bg-gradient-to-r from-red-500 to-rose-600 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
                Batalkan Transaksi
            </Button>

            <Modal
                backdrop="blur"
                classNames={{
                    closeButton: "hover:bg-red-100/30 active:bg-red-200/30 text-red-500",
                    backdrop: "bg-black/50",
                }}
                isOpen={isOpen}
                radius="lg"
                onOpenChange={onOpenChange}
                motionProps={{
                    variants: {
                        enter: {
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.3, ease: "easeOut" }
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.95,
                            transition: { duration: 0.2, ease: "easeIn" }
                        }
                    }
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <div className="flex items-center space-x-2 text-red-600">
                                    <FiAlertTriangle className="text-2xl animate-pulse" />
                                    <span>Konfirmasi Pembatalan</span>
                                </div>
                            </ModalHeader>

                            <ModalBody>
                                <div className="flex flex-col items-center justify-center py-4">
                                    <div className="relative mb-6">
                                        <div className="absolute -inset-1 rounded-full bg-red-300 opacity-30 blur-md animate-pulse"></div>
                                        <div className="relative bg-gradient-to-br from-red-500 to-red-600 text-white p-4 rounded-full">
                                            <HiOutlineExclamationTriangle className="text-4xl animate-bounce" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                        Apakah Anda yakin?
                                    </h3>

                                    <p className="text-center text-gray-600 dark:text-gray-300 mb-3">
                                        Transaksi yang sudah dibatalkan tidak dapat dikembalikan ke status semula.
                                    </p>

                                    <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-4 rounded my-2 shadow-sm">
                                        <div className="flex items-start">
                                            <MdErrorOutline className="text-red-500 text-xl mr-2 mt-0.5" />
                                            <div>
                                                <p className="text-sm text-red-700 dark:text-red-300">
                                                    Pembatalan akan menghentikan transaksi ini secara permanen dan tidak dapat dilanjutkan kembali setelah dibatalkan.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>

                            <ModalFooter>
                                <Button
                                    color="default"
                                    variant="light"
                                    onPress={onClose}
                                    className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                                >
                                    Kembali
                                </Button>

                                <Button
                                    className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md hover:shadow-lg transition-all hover:scale-105 gap-1"
                                    onPress={handleCancelTransaction}
                                    isLoading={cancelTransactionMutation.isPending}
                                    startContent={!cancelTransactionMutation.isPending && <MdOutlineCancel />}
                                >
                                    Batalkan Transaksi
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
