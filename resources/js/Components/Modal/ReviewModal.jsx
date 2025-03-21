import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Textarea,
    addToast,
} from "@heroui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { MdStar } from 'react-icons/md';
import { useState } from "react";
import { router } from "@inertiajs/react";

const StarRating = ({ rating, setRating }) => {
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="flex items-center justify-center space-x-1 my-4">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    className="focus:outline-none transition-transform duration-200 hover:scale-110"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                >
                    <MdStar
                        className={`text-3xl ${(hoverRating || rating) >= star
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            } ${(hoverRating || rating) === star
                                ? "animate-pulse"
                                : ""
                            }`}
                    />
                </button>
            ))}
        </div>
    );
};

export default function ReviewModal({
    transactionId,
    onStatusUpdate
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const queryClient = useQueryClient();

    const reviewTransactionMutation = useMutation({
        mutationFn: async () => {
            const response = await axios.post(route('api.transactions.review', { id: transactionId }), {
                rating: rating,
                review: reviewText
            });
            return response.data;
        },
        onSuccess: (response) => {
            addToast({
                title: "Berhasil",
                description: response.message || "Terima kasih atas penilaian Anda",
                color: "success",
            });

            router.reload();

            queryClient.invalidateQueries(['transaction', transactionId]);

            onStatusUpdate(response.data.transaction_status)

        },
        onError: (error) => {
            addToast({
                title: "Hmm, sayang sekali:(",
                description: error.response?.data?.error || 'Gagal mengirim penilaian',
                color: "danger",
            });
        }
    });

    const handleReviewTransaction = () => {
        if (rating === 0) {
            addToast?.({
                title: "Oops!",
                description: "Silakan berikan penilaian bintang terlebih dahulu",
                color: "warning",
            });
            return;
        }

        reviewTransactionMutation.mutate();
        onOpenChange(false);
    };

    const handleReset = () => {
        setRating(0);
        setReviewText("");
    };

    // Rating Labels
    const ratingLabels = {
        0: "",
        1: "Sangat Buruk",
        2: "Buruk",
        3: "Cukup",
        4: "Baik",
        5: "Sangat Baik"
    };

    return (
        <>
            <Button
                color="danger"
                startContent={<MdStar className="text-lg" />}
                onPress={onOpen}
                className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
                Beri Penilaian
            </Button>

            <Modal
                backdrop="blur"
                classNames={{
                    closeButton: "hover:bg-blue-100/30 active:bg-blue-200/30 text-blue-500",
                    backdrop: "bg-black/50",
                }}
                isOpen={isOpen}
                radius="lg"
                onOpenChange={(isOpen) => {
                    if (!isOpen) {
                        handleReset();
                    }
                    onOpenChange(isOpen);
                }}
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
                                <div className="flex items-center space-x-2 text-blue-600">
                                    <MdStar className="text-2xl animate-pulse" />
                                    <span>Beri Penilaian</span>
                                </div>
                            </ModalHeader>

                            <ModalBody>
                                <div className="flex flex-col items-center justify-center py-4">
                                    <div className="relative mb-6">
                                        <div className="absolute -inset-1 rounded-full bg-blue-300 opacity-30 blur-md animate-pulse"></div>
                                        <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-full">
                                            <MdStar className="text-4xl animate-bounce" />
                                        </div>
                                    </div>

                                    <h3 className="text-md font-bold text-gray-800 dark:text-white mb-2">
                                        Seberapa Puas Anda Dengan Layanan Kami?
                                    </h3>

                                    <p className="text-xs text-center text-gray-600 dark:text-gray-300 mb-3">
                                        Semua masukkan dari Anda akan jadi bahan evaluasi untuk meningkatkan kualitas pelayanan kami.
                                    </p>

                                    {/* Rating Component */}
                                    <StarRating rating={rating} setRating={setRating} />

                                    {/* Rating Label */}
                                    {rating > 0 && (
                                        <div className="mb-4">
                                            <span className={`text-sm font-medium px-3 py-1 rounded-full ${rating >= 4 ? "bg-green-100 text-green-800" :
                                                    rating >= 3 ? "bg-blue-100 text-blue-800" :
                                                        "bg-yellow-100 text-yellow-800"
                                                }`}>
                                                {ratingLabels[rating]}
                                            </span>
                                        </div>
                                    )}

                                    <Textarea
                                        placeholder="Ceritakan pengalaman Anda dengan layanan kami..."
                                        value={reviewText}
                                        onChange={(e) => setReviewText(e.target.value)}
                                        className="w-full mt-2"
                                    />
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
                                    className={`bg-gradient-to-r shadow-md hover:shadow-lg transition-all hover:scale-105 gap-1 ${rating > 0 ? "from-blue-500 to-blue-600" : "from-gray-400 to-gray-500"
                                        } text-white`}
                                    onPress={handleReviewTransaction}
                                    isLoading={reviewTransactionMutation.isPending}
                                    startContent={!reviewTransactionMutation.isPending && <MdStar />}
                                >
                                    Kirim Penilaian
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
