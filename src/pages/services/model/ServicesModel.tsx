import { CategoryDto, CreateOrUpdateCategoryDto } from "../../../api/services/dto";

export interface ServicesViewProps {
  categories: CategoryDto[] | undefined;
  idButtonSelection: number;
  isOpenChangeCategory: boolean;
  newCategory: CreateOrUpdateCategoryDto;
  handleChoise: Function;
  handleCreateCategory: Function;
  openFormChangeCategory: Function;
  handleChangeCategory: Function;
  handleUpdateCategory: Function;
  handleDeleteCategory: Function;
}
