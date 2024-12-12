import React, { useEffect, useState } from "react";
import {fetchAllReviews} from "../../api/reviews/request";
import { Review } from "../../api/reviews/dto";
import {ReviewsBlockView} from "./view/ReviewsBlockView";

interface reviewsFromMapBlockProps {
    id: string;
}
export const ReviewsBlockScreen: React.FC<reviewsFromMapBlockProps> = ({id}) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadReviews = async () => {
            try {
                const data = await fetchAllReviews();
                setReviews(data);
            } catch (err) {
                setError("Не удалось загрузить отзывы. Попробуйте позже.");
            } finally {
                setLoading(false);
            }
        };

        loadReviews();
    }, []);

    return (
        <div id={id}>
            <ReviewsBlockView reviews={reviews} loading={loading} error={error} />
        </div>
    );
};
