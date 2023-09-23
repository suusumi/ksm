import { HttpClient } from "../../ky/HttpClient";

export const fetchAllBanners = async ():Promise<Response> => {
    try {
        const response = await HttpClient.get("banners");

        if (response.ok) {
            return response;
        } else {
            throw new Error('Ошибка в получении всех баннеров: ' + response.statusText);
        }
    } catch (error) {
        throw new Error('Ошибка: ' + error);
    }
}

export const createBanners = async (formData: FormData): Promise<Response> => {
    try {
        const response = await HttpClient.post("banners/createwithimage", {
            body: formData
        });

        if (response.ok) {
            return response;
        } else { 
            throw new Error('Ошибка в создании баннера');
        }
    } catch (error) {
        throw new Error('Ошибка: ' + error);
    }
}

export const deleteBanner = async (id: number): Promise<Response> => {
    try {
        const response = await HttpClient.delete(`banners/${id}`);

        if (response.ok) {
            return response;
        } else {
            throw new Error('Ошибка с удалением баннера');
        }
    } catch (error) {
        throw new Error('Ошибка: ' + error)
    }
}