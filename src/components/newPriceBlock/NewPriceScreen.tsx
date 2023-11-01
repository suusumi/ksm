import React, { useEffect, useState } from "react";
import { NewPriceView } from "./NewPriceView";
import {
  fetchAllCategories,
  fetchAllServices,
  fetchAllSubcategories,
} from "../../api/services/request";
import {
  CategoryDto,
  ServiceDto,
  SubcategoryDto,
} from "../../api/services/dto";

export const NewPrice = () => {
  const [categories, setCategories] = useState<CategoryDto[]>();
  const [subcategories, setSubcategories] = useState<SubcategoryDto[]>();
  const [services, setServices] = useState<ServiceDto[]>();
  const [idButtonSelection, setIdButtonSelection] = useState<number>(-1);
  const [update, setUpdate] = useState({});
  const [idChangeService, setIdChangeService] = useState<number>(-1);
  const [isOpenChangeCategory, setIsOpenChangeCategory] =
    useState<boolean>(false);
  const [idChangeSubcategory, setIdChangeSubcategory] = useState<number>(-1);

  useEffect(() => {
    fetchAllCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, [update]);

  useEffect(() => {
    fetchAllSubcategories()
      .then((data) => setSubcategories(data))
      .catch((error) => console.error(error));
  }, [update]);

  useEffect(() => {
    fetchAllServices()
      .then((data) => data.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, [update]);

  const handleChoise = (id: number) => {
    setIdButtonSelection(id);
    setIsOpenChangeCategory(false);
  };

  const openFormChangeCategory = () => {
    setIsOpenChangeCategory(!isOpenChangeCategory);
  };

  const openFormChangeSubcategory = (id: number) => {
    if (idChangeSubcategory === id) {
      setIdChangeSubcategory(-1);
    } else {
      setIdChangeSubcategory(id);
    }
  };

  const openFormChangeService = (id: number) => {
    if (idChangeService === id) {
      setIdChangeService(-1);
    } else {
      setIdChangeService(id);
    }
  };

  return (
    <NewPriceView
      categories={categories}
      subcategories={subcategories}
      services={services}
      idButtonSelection={idButtonSelection}
      idChangeSubcategory={idChangeSubcategory}
      idChangeService={idChangeService}
      isOpenChangeCategory={isOpenChangeCategory}
      handleChoise={handleChoise}
    />
  );
};

export default NewPrice;
