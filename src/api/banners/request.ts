import { HttpClient } from "../../ky/HttpClient";

/**
 * Получение всех баннеров
 *
 * @returns {Promise<Response>} A promise that resolves to a `Response` object.
 */

export const fetchAllBanners = async (): Promise<Response> => {
  try {
    const response = await HttpClient.get("banners");

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
