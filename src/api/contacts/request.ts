import { json } from "stream/consumers";
import { HttpClient } from "../../ky/HttpClient";

/**
 * Запрос на получение всех контактов
 *
 * @returns {Promise<Response>}
 */
export const fetchAllContacts = async (): Promise<Response> => {
  try {
    const response = await HttpClient.get("contacts");

    if (response.ok) {
      return response;
    } else {
      throw new Error("Ошибка в получении контактов: " + response.statusText);
    }
  } catch (error) {
    throw new Error("Ошибка: " + error);
  }
};
