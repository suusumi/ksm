/**
 * ServiceDto
 *
 * @property {number} id - идентификатор
 * @property {string} name - наименование услуги
 * @property {string} description - номер услуги
 * @property {number} price - цена
 * @property {number} subCategoryId - идентификатор SubCategory
 */
export type ServiceDto = {
  id: number;
  name: string;
  description: string;
  price: number;
  subCategoryId: number;
};

/**
 * SubCatrgotyDro
 * 
 * @property {number} id - идентификатор
 * @property {string} name - намиенование подкатегории
 * @property {categoryId} categoryId - иденнтификатор Category
 */
export type SubCategoryDto = {
  id: number,
  name: string,
  categoryId: number
}

/**
 * CategoryDto
 * 
 * @property {number} id - идентификатор
 * @property {string} name - наименование категории
 */
export type CategoryDto = {
  id: number,
  name: string
}

/**
 * Create Or Update Categoty Dto
 * 
 * @property {string} name - наимаенование категории
 */
export type CreateOrUpdateCategoryDto = {
  name: string
}