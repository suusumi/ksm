/**
 * BannersDto
 *
 * @property {number} id идентификатор
 * @property {string} title Заголовок
 * @property {string} subtitle Подзаголовок
 * @property {string} text_content Текст
 * @property {string} img_path Ссылка
 */
export type BannersDto = {
  id: number;
  title: string;
  subtitle: string;
  text_content: string;
  banner_type: string;
  img_path: string;
};

/**
 * CreateBannerDto
 *
 
 * @property {string} title Заголовок
 * @property {string} subtitle Подзаголовок
 * @property {string} text_content Текст
 * @property {string} img_path Ссылка
 */
export type CreateBannersDto = {
  title: string;
  subtitle: string;
  text_content: string;
  img_path: string;
};
