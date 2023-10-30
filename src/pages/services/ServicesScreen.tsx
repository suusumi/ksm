import React, { useEffect, useState } from "react";
import { ServicesView } from "./view/ServicesView";
import {
  createCategory,
  createSubcategory,
  deleteCategory,
  deleteSubcategory,
  fetchAllCategories,
  fetchAllSubcategories,
  updateCategory,
  updateSubcategory,
} from "../../api/services/request";
import {
  CategoryDto,
  CreateOrUpdateCategoryDto,
  CreateOrUpdateSubcategoryDto,
  SubcategoryDto,
} from "../../api/services/dto";

export const ServicesScreen = () => {
  const [categories, setCategories] = useState<CategoryDto[]>();
  const [subcategories, setSubcategories] = useState<SubcategoryDto[]>();
  const [idButtonSelection, setIdButtonSelection] = useState<number>(-1);
  const [idChangeSubcategory, setIdChangeSubcategory] = useState<number>(-1);
  const [update, setUpdate] = useState({});
  const [isOpenChangeCategory, setIsOpenChangeCategory] =
    useState<boolean>(false);
  const [newCategory, setNewCategory] = useState<CreateOrUpdateCategoryDto>({
    name: "",
  });
  const [newSubcategory, setNewSubcategory] =
    useState<CreateOrUpdateSubcategoryDto>({
      name: "",
      category_id: -1
    });

  useEffect(() => {
    fetchAllCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error(error));
  }, [update]);

  useEffect(() => {
    fetchAllSubcategories()
      .then((data) => {
        setSubcategories(data);
      })
      .catch((error) => console.error(error));
  }, [update]);

  const handleChoise = (id: number) => {
    setIdButtonSelection(id);
    setIsOpenChangeCategory(false);
  };

  const handleCreateCategory = async () => {
    const newCategory: CreateOrUpdateCategoryDto = {
      name: `New Category ${
        categories === undefined || categories.length === 0
          ? 1
          : categories.length + 1
      }`,
    };
    await createCategory(newCategory);
    setUpdate({});
  };

  const handleCreateSubcategory = async () => {
    const count = subcategories?.filter(
      (subcategory) => subcategory.category_id === idButtonSelection
    ).length;

    const newSubcategory: CreateOrUpdateSubcategoryDto = {
      name: `New Category ${
        count === undefined || count === 0 ? 1 : count + 1
      }`,
      category_id: idButtonSelection
    };
    await createSubcategory(newSubcategory).catch((error) => console.error(error));
    setUpdate({});
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

  useEffect(() => {
    if (isOpenChangeCategory) {
      setNewCategory({
        name:
          categories?.find((category) => category.id === idButtonSelection)
            ?.name ?? "",
      });
    }
  }, [isOpenChangeCategory]);

  useEffect(() => {
    setNewSubcategory({
      name:
        subcategories?.find(
          (subcategory) => subcategory.id === idChangeSubcategory
        )?.name ?? "",
        category_id: idButtonSelection
    });
  }, [idChangeSubcategory]);

  const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory({ name: event.target.value });
  };

  const handleChangeSubcategory = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewSubcategory({ name: event.target.value, category_id: idButtonSelection });
  };

  const handleUpdateCategory = async (id: number) => {
    await updateCategory(id, newCategory).catch((error) =>
      console.error(error)
    );
    openFormChangeCategory();
    setUpdate({});
  };

  const handleUpdateSubcategory = async (id: number) => {
    await updateSubcategory(id, newSubcategory).catch((error) =>
      console.error(error)
    );
    openFormChangeSubcategory(id);
    setUpdate({});
  };

  const handleDeleteCategory = (id: number) => {
    deleteCategory(id).catch((error) => console.error(error));
    handleChoise(-1);
    setUpdate({});
  };

  const handleDeleteSubcategory = (id: number) => {
    deleteSubcategory(id).catch((error) => console.error(error));
    setUpdate({});
  };

  return (
    <ServicesView
      categories={categories}
      subcategories={subcategories}
      idButtonSelection={idButtonSelection}
      idChangeSubcategory={idChangeSubcategory}
      isOpenChangeCategory={isOpenChangeCategory}
      newCategory={newCategory}
      newSubcategory={newSubcategory}
      handleChoise={handleChoise}
      handleCreateCategory={handleCreateCategory}
      handleCreateSubcategory={handleCreateSubcategory}
      openFormChangeCategory={openFormChangeCategory}
      openFormChangeSubcategory={openFormChangeSubcategory}
      handleChangeCategory={handleChangeCategory}
      handleChangeSubcategory={handleChangeSubcategory}
      handleUpdateCategory={handleUpdateCategory}
      handleUpdateSubcategory={handleUpdateSubcategory}
      handleDeleteCategory={handleDeleteCategory}
      handleDeleteSubcategory={handleDeleteSubcategory}
    />
  );
};
