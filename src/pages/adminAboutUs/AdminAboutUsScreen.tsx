import React, { useEffect, useState } from "react";

import { AdminAboutUsModel } from "./model/AdminAboutUsModel";
import { AboutUs } from "../../api/aboutUs/dto";
import { fetchAboutUs, updateAboutUs, updateAboutUsImage } from "../../api/aboutUs/request";
import { AdminAboutUsView } from "./view/AdminAboutUsView";

export const AdminAboutUsScreen: React.FC = () => {
    const [aboutUs, setAboutUs] = useState<AboutUs | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [localContent, setLocalContent] = useState<string>(""); // Локальное состояние для текста
    const [localImage, setLocalImage] = useState<File | null>(null); // Локальное состояние для файла

    useEffect(() => {
        const loadAboutUs = async () => {
            try {
                const data = await fetchAboutUs();
                setAboutUs(data);
                setLocalContent(data.content); // Инициализируем локальное состояние
            } catch (err) {
                console.error("Ошибка при загрузке информации О НАС:", err);
                setError("Не удалось загрузить информацию О НАС. Попробуйте позже.");
            } finally {
                setLoading(false);
            }
        };

        loadAboutUs();
    }, []);

    const handleUpdateContent = (content: string) => {
        setLocalContent(content); // Обновляем только локальное состояние
    };

    const handleUpdateImage = (file: File) => {
        setLocalImage(file); // Сохраняем выбранное изображение в локальном состоянии
    };

    const handleSaveChanges = async () => {
        try {
            // Обновляем текст
            if (localContent !== aboutUs?.content) {
                await updateAboutUs({ content: localContent });
            }

            // Обновляем изображение, если оно выбрано
            if (localImage) {
                const formData = new FormData();
                formData.append("image", localImage);
                const { imageUrl } = await updateAboutUsImage(formData);
                setAboutUs((prev) => (prev ? { ...prev, imageUrl } : null)); // Обновляем URL изображения
            }

            // Обновляем состояние
            setAboutUs((prev) => (prev ? { ...prev, content: localContent } : null));
            alert("Изменения успешно сохранены!");
        } catch (err) {
            console.error("Ошибка при сохранении изменений:", err);
            setError("Не удалось сохранить изменения. Попробуйте позже.");
        }
    };

    return (
        <AdminAboutUsView
            aboutUs={aboutUs}
            loading={loading}
            error={error}
            localContent={localContent}
            onUpdateContent={handleUpdateContent}
            onUpdateImage={handleUpdateImage}
            onSaveChanges={handleSaveChanges}
            onUpdate={() => {}}
        />
    );
};
