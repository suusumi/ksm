import { HttpClient } from "../../ky/HttpClient";
import {CreateReviewDto, Review, UpdateReviewDto} from "./dto";

// Получение всех отзывов
export const fetchAllReviews = async (): Promise<Review[]> => {
    const response = await HttpClient.get("reviews");
    if (!response.ok) {
        throw new Error("Ошибка загрузки отзывов");
    }
    return response.json();
};

// Создание нового отзыва
export const createReview = async (review: CreateReviewDto): Promise<Review> => {
    const response = await HttpClient.post("reviews", {
        json: review,
    });
    if (!response.ok) {
        throw new Error("Ошибка создания отзыва");
    }
    return response.json();
};

// Обновление отзыва
export const updateReview = async (id: number, review: UpdateReviewDto): Promise<Review> => {
    const response = await HttpClient.patch(`reviews/${id}`, {
        json: review,
    });
    if (!response.ok) {
        throw new Error("Ошибка обновления отзыва");
    }
    return response.json();
};

// Удаление отзыва
export const deleteReview = async (id: number): Promise<void> => {
    const response = await HttpClient.delete(`reviews/${id}`);
    if (!response.ok) {
        throw new Error("Ошибка удаления отзыва");
    }
};
