import { json } from "stream/consumers";
import { HttpClient } from "../../ky/HttpClient";

/**
 * Получение всей инфографики
 *
 * @return {Promise<Response>} A promise that resolves to a `Response` object.
 */
export const fetchAllInfogrpaphics = async (): Promise<Response> => {
  try {
    const response = await HttpClient.get("inphographics");

    if (response.ok) {
      return response;
    } else {
      throw new Error(
        "Ошибка в получении всех баннеров: " + response.statusText
      );
    }
  } catch (error) {
    throw new Error("Ошибка: " + error);
  }
};
