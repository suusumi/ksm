import { CategoryDto, CreateOrUpdateCategoryDto, CreateOrUpdateServiceDto, ServiceDto, SubcategoryDto } from "../../../api/services/dto";

export interface ServicesViewProps {
  categories: CategoryDto[] | undefined;
  subcategories: SubcategoryDto[] | undefined;
  services: ServiceDto[] | undefined;
  idButtonSelection: number;
  idChangeSubcategory: number;
  idChangeService: number;
  isOpenChangeCategory: boolean;
  newCategory: CreateOrUpdateCategoryDto;
  newSubcategory: CreateOrUpdateCategoryDto;
  newService: CreateOrUpdateServiceDto;
  handleChoise: Function;
  handleCreateCategory: Function;
  handleCreateSubcategory: Function;
  handleCreateServise: Function;
  openFormChangeCategory: Function;
  openFormChangeSubcategory: Function;
  openFormChangeServise: Function;
  handleChangeCategory: Function;
  handleChangeSubcategory: Function;
  handleChangeService: Function;
  handleUpdateCategory: Function;
  handleUpdateSubcategory: Function;
  handleUpdateService: Function;
  handleDeleteCategory: Function;
  handleDeleteSubcategory: Function;
  handleDeleteService: Function;
}
