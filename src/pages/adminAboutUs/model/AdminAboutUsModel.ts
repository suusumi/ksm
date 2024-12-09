import { AboutUs, UpdateAboutUs } from "../../../api/aboutUs/dto";

export interface AdminAboutUsModel {
    aboutUs: AboutUs | null; // Текущие данные из сервера
    loading: boolean; // Статус загрузки
    error: string | null; // Ошибка загрузки или сохранения

    // Методы для работы с данными
    onUpdate: (data: UpdateAboutUs) => void; // Для обновления текста (локально или на сервере)
    onUpdateImage: (file: File) => void; // Для сохранения выбранного изображения (локально)
    onSaveChanges: () => void; // Сохранение изменений (текст + изображение) на сервере

    // Локальные состояния для текста и изображения
    localContent: string; // Локальное состояние для текста
    onUpdateContent: (content: string) => void; // Обновление текста в локальном состоянии
}
