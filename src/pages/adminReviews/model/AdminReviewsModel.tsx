import {CreateReviewDto, Review} from "../../../api/reviews/dto";

export interface AdminReviewsModel {
    reviews: Review[]; // Список отзывов, загруженных с сервера
    loading: boolean; // Статус загрузки данных
    error: string | null; // Ошибка загрузки или выполнения операций

    // Методы для работы с отзывами
    onCreateOrUpdate: (review: CreateReviewDto | Review) => void; // Создание или обновление отзыва
    onDelete: (id: number) => void; // Удаление отзыва
    onEdit: (review: Review) => void; // Открытие модалки для редактирования
    onAdd: () => void; // Открытие модалки для создания нового отзыва

    // Локальное состояние модального окна
    isDialogOpen: boolean; // Состояние модалки
    onCloseDialog: () => void; // Закрытие модального окна
    currentReview: Review | null; // Текущий отзыв, который редактируется или создается
}
