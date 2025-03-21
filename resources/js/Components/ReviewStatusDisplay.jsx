import { MdStar, MdStarOutline } from 'react-icons/md';

const ReviewStatusDisplay = ({ rating, reviewText }) => {
    // Rating labels
    const getRatingLabel = (rating) => {
        switch (rating) {
            case 1: return "Sangat Buruk";
            case 2: return "Buruk";
            case 3: return "Cukup";
            case 4: return "Baik";
            case 5: return "Sangat Baik";
            default: return "Tidak Ada Rating";
        }
    };

    // Rating color class
    const getRatingColorClass = (rating) => {
        if (rating >= 4) return "text-green-600 dark:text-green-400";
        if (rating >= 3) return "text-blue-600 dark:text-blue-400";
        if (rating >= 1) return "text-yellow-600 dark:text-yellow-400";
        return "text-gray-600 dark:text-gray-400";
    };

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-gray-500 dark:text-gray-100">Status Transaksi</p>
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full">
                    Selesai & Dinilai
                </span>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mb-3">
                <div className="flex items-center mb-2">
                    {/* Render stars based on rating */}
                    <div className="flex mr-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className="text-lg">
                                {star <= rating ? (
                                    <MdStar className="text-yellow-400" />
                                ) : (
                                    <MdStarOutline className="text-gray-300 dark:text-gray-500" />
                                )}
                            </span>
                        ))}
                    </div>

                    {/* Rating label */}
                    <span className={`text-sm font-medium ${getRatingColorClass(rating)}`}>
                        {getRatingLabel(rating)}
                    </span>
                </div>

                {/* Review text if available */}
                {reviewText && (
                    <div className="mt-2">
                        <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                            "{reviewText}"
                        </p>
                    </div>
                )}
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400">
                Terima kasih atas penilaian Anda. Feedback ini sangat berharga bagi kami untuk meningkatkan layanan.
            </div>
        </div>
    );
};

export default ReviewStatusDisplay;
