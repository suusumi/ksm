import { json } from "stream/consumers";
import { HttpClient } from "../../ky/HttpClient";
import { HTTPError } from "ky";
import { CategoryDto, CreateOrUpdateCategoryDto } from "./dto";

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

export const fetchAllCategories = async (): Promise<CategoryDto[]> => {
  const response = await HttpClient.get("categories");
  if (!response.ok) {
    throw new Error("Ошибка в получение всех категорий: " + response.statusText);
  }

  return response.json();
}

export const createCategory = async (dto: CreateOrUpdateCategoryDto): Promise<CategoryDto> => {
  const response = await HttpClient.post("categories", {json: dto});
  if (!response.ok) {
    throw new Error("Ошибка при создании новой категории");
  }

  return response.json();
}

export const updateCategory = async (id: number, dto: CreateOrUpdateCategoryDto): Promise<CategoryDto> => {
  const response = await HttpClient.patch(`categories/${id}`, {json: dto});
  if (!response.ok) {
    throw new Error(response.statusText + " - Ошибка при обновлении категории!");
  }
  
  return response.json();
}

export const deleteCategory = async (id: number): Promise<CategoryDto> => {
  const response = await HttpClient.delete(`categories/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText + " -  Ошибка при удалении категории!");
  }

  return response.json();
}