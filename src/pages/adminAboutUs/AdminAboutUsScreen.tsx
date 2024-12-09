import React, { useEffect, useState } from "react";

import { AdminAboutUsModel } from "./model/AdminAboutUsModel";
import {AboutUs} from "../../api/aboutUs/dto";
import {fetchAboutUs, updateAboutUs, updateAboutUsImage} from "../../api/aboutUs/request";
import {AdminAboutUsView} from "./view/AdminAboutUsView";

export const AdminAboutUsScreen: React.FC = () => {
    const [aboutUs, setAboutUs] = useState<AboutUs | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadAboutUs = async () => {
            try {
                const data = await fetchAboutUs();
                setAboutUs(data);
            } catch (err) {
                console.error("Ошибка при загрузке информации О НАС:", err);
                setError("Не удалось загрузить информацию О НАС. Попробуйте позже.");
            } finally {
                setLoading(false);
            }
        };

        loadAboutUs();
    }, []);

    const handleUpdateAboutUs: AdminAboutUsModel["onUpdate"] = async (updateData) => {
        try {
            await updateAboutUs(updateData);
            setAboutUs((prev) => ({ ...prev, ...updateData } as AboutUs));
        } catch (err) {
            console.error("Ошибка при обновлении информации О НАС:", err);
        }
    };

    const handleUpdateImage: AdminAboutUsModel["onUpdateImage"] = async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        try {
            const { imageUrl } = await updateAboutUsImage(formData);
            setAboutUs((prev) => (prev ? { ...prev, imageUrl } : null));
        } catch (err) {
            console.error("Ошибка при обновлении изображения О НАС:", err);
        }
    };

    return (
        <AdminAboutUsView
            aboutUs={aboutUs}
            loading={loading}
            error={error}
            onUpdate={handleUpdateAboutUs}
            onUpdateImage={handleUpdateImage}
        />
    );
};
