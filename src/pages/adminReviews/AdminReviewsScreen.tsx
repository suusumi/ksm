import React, { useEffect, useState } from "react";
import { fetchAllReviews, createReview, updateReview, deleteReview } from "../../api/reviews/request";
import { AdminReviewsView } from "./view/AdminReviewsView";
import { AdminReviewsModel } from "./model/AdminReviewsModel";
import {CreateReviewDto, Review} from "../../api/reviews/dto";

export const AdminReviewsScreen: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentReview, setCurrentReview] = useState<Review | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const loadReviews = async () => {
        try {
            setLoading(true);
            const data = await fetchAllReviews();
            setReviews(data);
        } catch (err) {
            setError("Ошибка загрузки отзывов");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadReviews();
    }, []);

    const handleCreateOrUpdate: AdminReviewsModel["onCreateOrUpdate"] = async (review) => {
        try {
            if ("id" in review) {
                await updateReview(review.id, review);
            } else {
                await createReview(review as CreateReviewDto);
            }
            await loadReviews();
            setIsDialogOpen(false);
            setCurrentReview(null);
        } catch (err) {
            setError("Ошибка сохранения отзыва");
        }
    };

    const handleDelete: AdminReviewsModel["onDelete"] = async (id) => {
        try {
            await deleteReview(id);
            await loadReviews();
        } catch (err) {
            setError("Ошибка удаления отзыва");
        }
    };

    return (
        <AdminReviewsView
            reviews={reviews}
            loading={loading}
            error={error}
            onCreateOrUpdate={handleCreateOrUpdate}
            onDelete={handleDelete}
            onEdit={(review) => {
                setCurrentReview(review);
                setIsDialogOpen(true);
            }}
            onAdd={() => {
                setCurrentReview(null);
                setIsDialogOpen(true);
            }}
            isDialogOpen={isDialogOpen}
            onCloseDialog={() => setIsDialogOpen(false)}
            currentReview={currentReview}
        />
    );
};
