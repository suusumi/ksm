/**
 * GetServicesDto
 *
 * @property {number} id - идентификатор
 * @property {string} type - ServiceType
 * @property {string} category - CategoryType
 * @property {string} name - наименование услуги
 * @property {string} description - номер услуги
 * @property {number} price - цена
 */
export type ServicesDto = {
  id: number;
  type: string;
  category: string;
  name: string;
  description: string;
  price: number;
};
