import {AboutUs, UpdateAboutUs} from "./dto";
import {HttpClient} from "../../ky/HttpClient";

/**
 * Получение информации "О нас"
 */
export const fetchAboutUs = async (): Promise<AboutUs> => {
    try {
        const response = await HttpClient.get("about-us");
        if (!response.ok) {
            throw new Error("Ошибка при загрузке информации О НАС");
        }
        return response.json(); // Возвращаем тип AboutUs
    } catch (error) {
        throw new Error("Ошибка: " + error);
    }
};

/**
 * Обновление информации "О нас"
 */
export const updateAboutUs = async (updateAboutUs: UpdateAboutUs): Promise<void> => {
    try {
        const response = await HttpClient.patch("about-us", {
            json: updateAboutUs,
        });
        if (!response.ok) {
            throw new Error("Ошибка при обновлении информации О НАС");
        }
    } catch (error) {
        throw new Error("Ошибка: " + error);
    }
};

/**
 * Обновление изображения для "О нас"
 */
export const updateAboutUsImage = async (formData: FormData): Promise<{ imageUrl: string }> => {
    try {
        const response = await HttpClient.patch("about-us/updateimage", {
            body: formData,
        });
        if (!response.ok) {
            throw new Error("Ошибка при обновлении изображения О НАС");
        }
        return response.json(); // Возвращаем новый URL изображения
    } catch (error) {
        throw new Error("Ошибка: " + error);
    }
};