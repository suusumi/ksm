import ky from "ky";
import { AuthResponse } from "./dto";
import { HttpClient } from "../../ky/HttpClient";

export const authAdmin = async (login: string, password: string): Promise<AuthResponse> => {
    const response = await HttpClient.post(`admin/auth`, {
        json: {
            login: login,
            password: password
        }
    });
    if (!response.ok) {
        throw new Error(response.statusText + ' - Ошибка во время авторизации!');
    }

    return response.json();
}