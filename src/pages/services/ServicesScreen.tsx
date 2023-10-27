import React, { useEffect, useState } from "react";
import { ServicesView } from "./view/ServicesView";
import {
  createCategory,
  deleteCategory,
  fetchAllCategories,
  updateCategory,
} from "../../api/services/request";
import { CategoryDto, CreateOrUpdateCategoryDto } from "../../api/services/dto";

export const ServicesScreen = () => {
  const [categories, setCategories] = useState<CategoryDto[]>();
  const [idButtonSelection, setIdButtonSelection] = useState(-1);
  const [update, setUpdate] = useState({});
  const [isOpenChangeCategory, setIsOpenChangeCategory] =
    useState<boolean>(false);
  const [newCategory, setNewCategory] = useState<CreateOrUpdateCategoryDto>({
    name: "",
  });

  useEffect(() => {
    fetchAllCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error(error));
  }, [, update]);

  const handleChoise = (id: number) => {
    setIdButtonSelection(id);
    setIsOpenChangeCategory(false);
  };

  const handleCreateCategory = async () => {
    const newCategory: CreateOrUpdateCategoryDto = {
      name: `New Category ${
        categories === undefined || categories.length === 0
          ? 1
          : categories[categories.length - 1].id + 1
      }`,
    };
    await createCategory(newCategory);
    setUpdate({});
  };

  const openFormChangeCategory = () => {
    setIsOpenChangeCategory(!isOpenChangeCategory);
  };

  useEffect(() => {
    if (isOpenChangeCategory) {
      setNewCategory({
        name:
          categories?.find((category) => category.id == idButtonSelection)
            ?.name ?? "",
      });
    }
  }, [isOpenChangeCategory]);

  const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory({ name: event.target.value });
  };

  const handleUpdateCategory = async (id: number) => {
    await updateCategory(id, newCategory).catch((error) =>
      console.error(error)
    );
    openFormChangeCategory();
    setUpdate({});
  };

  const handleDeleteCategory = (id: number) => {
    deleteCategory(id).catch((error) => console.error(error));
    handleChoise(-1);
    setUpdate({});
  };

  return (
    <ServicesView
      categories={categories}
      idButtonSelection={idButtonSelection}
      isOpenChangeCategory={isOpenChangeCategory}
      newCategory={newCategory}
      handleChoise={handleChoise}
      handleCreateCategory={handleCreateCategory}
      openFormChangeCategory={openFormChangeCategory}
      handleChangeCategory={handleChangeCategory}
      handleUpdateCategory={handleUpdateCategory}
      handleDeleteCategory={handleDeleteCategory}
    />
  );
};
