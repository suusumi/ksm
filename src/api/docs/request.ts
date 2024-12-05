import { json } from "stream/consumers";
import { HttpClient } from "../../ky/HttpClient";
import {CreateDocDto} from "./dto";


/**
 * Получение всей инфографики
 *
 * @return {Promise<Response>} A promise that resolves to a `Response` object.
 */
export const fetchAllDocs = async (): Promise<Response> => {
    try {
        const response = await HttpClient.get("documents");

        if (response.ok) {
            return response;
        } else {
            throw new Error(
                "Ошибка в получении всех документов: " + response.statusText
            );
        }
    } catch (error) {
        throw new Error("Ошибка: " + error);
    }
};

export const updateDocById = async (
    id: number,
    dto: CreateDocDto
): Promise<Response> => {
    try {
        const response = await HttpClient.patch(`documents/${id}`, {
            json: dto,
        });

        if (response.ok) {
            return response;
        } else {
            throw new Error("Ошибка с обновлением документов!");
        }
    } catch (error) {
        throw new Error("Ошибка: " + error);
    }
};

/**
 * Создание нового документа
 *
 * @param {CreateDocDto} dto - Объект с данными нового документа.
 * @return {Promise<Response>} A promise that resolves to a `Response` object.
 */
export const createDoc = async (dto: CreateDocDto): Promise<Response> => {
    try {
        const response = await HttpClient.post("documents", {
            json: dto,
        });

        if (response.ok) {
            return response;
        } else {
            throw new Error("Ошибка при создании документа!");
        }
    } catch (error) {
        throw new Error("Ошибка: " + error);
    }
};

/**
 * Удаление документа по ID
 *
 * @param {number} id - Идентификатор документа.
 * @return {Promise<Response>} A promise that resolves to a `Response` object.
 */
export const deleteDocById = async (id: number): Promise<Response> => {
    try {
        const response = await HttpClient.delete(`documents/${id}`);
        if (response.ok) {
            return response;
        } else {
            throw new Error("Ошибка при удалении документа!");
        }
    } catch (error) {
        throw new Error("Ошибка: " + error);
    }
};
