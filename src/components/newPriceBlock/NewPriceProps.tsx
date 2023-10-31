import {
  CategoryDto,
  ServiceDto,
  SubcategoryDto,
} from "../../api/services/dto";

export interface NewPriceProps {
  categories: CategoryDto[] | undefined;
  subcategories: SubcategoryDto[] | undefined;
  services: ServiceDto[] | undefined;
  idButtonSelection: number;
  idChangeSubcategory: number;
  idChangeService: number;
  isOpenChangeCategory: boolean;
  handleChoise: Function;
}
