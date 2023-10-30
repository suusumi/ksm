import { HttpClient } from "../../ky/HttpClient";
import { CategoryDto, CreateOrUpdateCategoryDto, CreateOrUpdateServiceDto, CreateOrUpdateSubcategoryDto, ServiceDto, SubcategoryDto } from "./dto";

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

/**
 * Создание новой услуги
 * 
 * @param dto - новая услуга
 * @returns {Promise<ServiceDto>} Promise -> Созданная Услуга
 */
export const createService = async (dto: CreateOrUpdateServiceDto): Promise<ServiceDto> => {
  const response = await HttpClient.post("services", { json: dto });
  if (!response.ok) {
    throw new Error(response.statusText + " - Ошибка при создании услуги!");
  }

  return response.json();
}

/**
 * Обновление услуги
 * 
 * @param id - идентфикатор услуги, которая будет обновлена
 * @param dto - обновленнаня услуга
 * @returns {Promise<ServiceDto>} Promise -> Обновленная услуга
 */
export const updateService = async (id: number, dto: CreateOrUpdateServiceDto): Promise<ServiceDto> => {
  const response = await HttpClient.patch(`services/${id}`, { json: dto });
  if (!response.ok) {
    throw new Error(response.statusText + " - Ошибка при обновлении подкатегории!");
  }

   return response.json(); 
}

/**
 * Удаление услуги
 * 
 * @param id - идентификатор удаляемой услуги
 * @returns {Promise<ServiceDto>} Promise -> удаленная услуги
 */
export const deleteService = async (id: number): Promise<ServiceDto> => {
  const response = await HttpClient.delete(`services/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText + " - Ошибка при удалении услуги!");
  }

  return response.json();
}

export const fetchAllSubcategories = async (): Promise<SubcategoryDto[]> => {
  const response = await HttpClient.get("subcategories");
  if (!response.ok) {
    throw new Error(response.statusText + "-  Ошибка при получении подкатегории!");
  }

  return response.json();
}

/**
 * Создание новой подкатегории
 * 
 * @param dto - новая подкатегория
 * @returns {Promise<SubcategoryDto>} Promise -> Созданная Подкатегория
 */
export const createSubcategory = async (dto: CreateOrUpdateSubcategoryDto): Promise<SubcategoryDto> => {
  const response = await HttpClient.post("subcategories", { json: dto });
  if (!response.ok) {
    throw new Error(response.statusText + " - Ошибка при создании подкатегории!");
  }

  return response.json();
}

/**
 * Обновление подкатегории
 * 
 * @param id - идентфикатор подкатегории, которая будет обновлена
 * @param dto - обновленнаня подкатегория
 * @returns {Promise<SubcategoryDto>} Promise -> Обновленная подкатегория
 */
export const updateSubcategory = async (id: number, dto: CreateOrUpdateSubcategoryDto): Promise<SubcategoryDto> => {
  const response = await HttpClient.patch(`subcategories/${id}`, { json: dto });
  if (!response.ok) {
    throw new Error(response.statusText + " - Ошибка при обновлении подкатегории!");
  }

  return response.json();
}

/**
 * Удаление подкатегории
 * 
 * @param id - идентификатор удаляемой подкатегории
 * @returns {Promise<SubategoryDto>} Promise -> удаленная подкатегории
 */
export const deleteSubcategory = async (id: number): Promise<SubcategoryDto> => {
  const response = await HttpClient.delete(`subcategories/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText + " - Ошибка при удалении подкатегории!");
  }

  return response.json();
}

/**
 * Получение всех категорий
 * 
 * @returns {Promise<CategoryDto[]>} Promise -> Список категорий 
 */
export const fetchAllCategories = async (): Promise<CategoryDto[]> => {
  const response = await HttpClient.get("categories");
  if (!response.ok) {
    throw new Error("Ошибка в получение всех категорий: " + response.statusText);
  }

  return response.json();
}

/**
 * Создание новой категории
 * 
 * @param dto - новая категория
 * @returns {Promise<CategoryDto>} Promise -> Созданная Категория
 */
export const createCategory = async (dto: CreateOrUpdateCategoryDto): Promise<CategoryDto> => {
  const response = await HttpClient.post("categories", { json: dto });
  if (!response.ok) {
    throw new Error("Ошибка при создании новой категории");
  }

  return response.json();
}

/**
 * Обновлении категории
 * 
 * @param id - идентификатор категории, которая будет обновлена
 * @param dto - обновленная категория
 * @returns {Promise<CategoryDto>} Promise -> обновленная категория
 */
export const updateCategory = async (id: number, dto: CreateOrUpdateCategoryDto): Promise<CategoryDto> => {
  const response = await HttpClient.patch(`categories/${id}`, { json: dto });
  if (!response.ok) {
    throw new Error(response.statusText + " - Ошибка при обновлении категории!");
  }

  return response.json();
}

/**
 * Удаление категории
 * 
 * @param id - идентификатор удаляемой категории
 * @returns {Promise<CategoryDto>} Promise -> удаленная категория
 */
export const deleteCategory = async (id: number): Promise<CategoryDto> => {
  const response = await HttpClient.delete(`categories/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText + " -  Ошибка при удалении категории!");
  }

  return response.json();
}