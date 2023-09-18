import { HttpClient } from "../../ky/HttpClient";
import { SpecialistDto, UpdateSpecialistDto } from "./dto";

export const fetchAllSpecialists = async (): Promise<Response> => {
    try {
        const response = await HttpClient.get("specialists");

        if (response.ok) {
            return response;
        } else {
           throw new Error('Ошибка в получении всех специалистов: ' + response.statusText);
        }

    } catch (error) {
        throw new Error('Ошибка: ' + error);
    }
}

export const createSpecialist = async (formData: FormData): Promise<Response> => {
    try {
        const response = await HttpClient.post("specialists/createwithphoto", {
            body: formData
        })

        if (response.ok) {
            return response;
        } else {
            throw new Error('Ошибка в получении всех специалистов: ' + response.statusText);
        }
    } catch (error) {
        throw new Error('Ошибка: ' + error);
    }
}

export const updateDataSpecialist = async (specialistId: number, dto: UpdateSpecialistDto): Promise<Response> => {
    try {
        const response = await HttpClient.patch(`specialists/${specialistId}`, {json: dto});

        if (response.ok) {
            return response;
        } else {
            throw new Error('Ошибка в обновлении даннхы специалиста: ' + response.statusText);
        }
    } catch (error) {
        throw new Error('Ошибка: ' + error);
    }
}

export const updatePhotoSpecialist = async (specialistId: number, formData: FormData): Promise<Response> => {
    try {
        const responce = await HttpClient.patch(`specialists/updatephoto/${specialistId}`, {
            body: formData
        });

        if (responce.ok) {
            return responce;
        } else {
            throw new Error('Ошибка в обновления фотографии специалиста: ' + responce.status);
        }
    } catch (error) {
        throw new Error('Ошибка: ' + error);
    }
}

export const deleteSpecialistById = async (specialistId: number): Promise<Response> => {
    try {
        const responce = await HttpClient.delete(`specialist/${specialistId}`);

        if (responce.ok) {
            return responce;
        } else {
            throw new Error('Ошибка в удалении специалиста: ' + responce.statusText);
        }
    } catch (error) {
        throw new Error('Ошибка: ' + error);
    }
}