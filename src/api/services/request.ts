import { json } from "stream/consumers";
import { HttpClient } from "../../ky/HttpClient";

/**
 * Получение всех услуг
 *
 * @returns {Promise<Response>} A promise that resolves to a `Response` object.
 */
export const fetchAllServices = async (): Promise<Response> => {
  try {
    const response = await HttpClient.get("services");
    if (response.ok) {
      return response;
    } else {
      throw new Error("Ошибка в получении всех услуг: " + response.statusText);
    }
  } catch (error) {
    throw new Error("Ошибка: " + error);
  }
};
