import { json } from "stream/consumers";
import { HttpClient } from "../../ky/HttpClient"
import { CreateInfographicsDto } from "./dto";

export const fetchAllInfogrpaphics = async (): Promise<Response> => {
    try {
        const response = await HttpClient.get("inphographics");

        if (response.ok) {
            return response;
        } else {
            throw new Error('Ошибка в получении всех баннеров: ' + response.statusText);
        }
    } catch (error) {
        throw new Error('Ошибка: ' + error);
    }
}

export const updateInfographicsById = async (id: number, dto: CreateInfographicsDto):Promise<Response> => {
    try {
        const response = await HttpClient.patch(`inphographics/${id}`, {json: dto});

        if (response.ok) {
            return response;
        } else {
            throw new Error('Ошибка с обновлением инфографики!');
        }
    } catch (error) {
        throw new Error('Ошибка: ' + error);
    }
}