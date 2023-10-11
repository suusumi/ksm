// SpecialistInterfaces.ts

/**
 * Контент карточки специалиста
 * @interface
 *
 * @property {string} id идентификатор
 * @property {string} name ФИО
 * @property {string} post должность
 * @property {string} speciality специальность
 * @property {string} degree степень
 * @property {string} quote цитата
 * @property {string} imageUrl ссылка на фото
 */
export interface SpecialistCardInterface {
  id: string;
  name: string;
  post: string;
  speciality: string;
  degree: string;
  quote: string;
  imageUrl: string;
}
