import { CategoryDto, CreateOrUpdateCategoryDto, SubcategoryDto } from "../../../api/services/dto";

export interface ServicesViewProps {
  categories: CategoryDto[] | undefined;
  subcategories: SubcategoryDto[] | undefined;
  idButtonSelection: number;
  idChangeSubcategory: number;
  isOpenChangeCategory: boolean;
  newCategory: CreateOrUpdateCategoryDto;
  newSubcategory: CreateOrUpdateCategoryDto;
  handleChoise: Function;
  handleCreateCategory: Function;
  handleCreateSubcategory: Function;
  openFormChangeCategory: Function;
  openFormChangeSubcategory: Function;
  handleChangeCategory: Function;
  handleChangeSubcategory: Function;
  handleUpdateCategory: Function;
  handleUpdateSubcategory: Function;
  handleDeleteCategory: Function;
  handleDeleteSubcategory: Function;
}
