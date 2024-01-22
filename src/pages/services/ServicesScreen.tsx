import React, { useEffect, useState } from "react";
import { ServicesView } from "./view/ServicesView";
import {
  createCategory,
  createService,
  createSubcategory,
  deleteCategory,
  deleteService,
  deleteSubcategory,
  fetchAllCategories,
  fetchAllServices,
  fetchAllSubcategories,
  updateCategory,
  updateService,
  updateSubcategory,
} from "../../api/services/request";
import {
  CategoryDto,
  CreateOrUpdateCategoryDto,
  CreateOrUpdateServiceDto,
  CreateOrUpdateSubcategoryDto,
  ServiceDto,
  SubcategoryDto,
} from "../../api/services/dto";

export const ServicesScreen = () => {
  const [categories, setCategories] = useState<CategoryDto[]>();
  const [subcategories, setSubcategories] = useState<SubcategoryDto[]>();
  const [services, setServices] = useState<ServiceDto[]>();
  const [idButtonSelection, setIdButtonSelection] = useState<number>(-1);
  const [idChangeSubcategory, setIdChangeSubcategory] = useState<number>(-1);
  const [idChangeService, setIdChangeService] = useState<number>(-1);
  const [update, setUpdate] = useState({});
  const [isOpenChangeCategory, setIsOpenChangeCategory] =
    useState<boolean>(false);
  const [newCategory, setNewCategory] = useState<CreateOrUpdateCategoryDto>({
    name: "",
  });
  const [newSubcategory, setNewSubcategory] =
    useState<CreateOrUpdateSubcategoryDto>({
      name: "",
      category_id: -1,
    });
  const [newService, setNewService] = useState<CreateOrUpdateServiceDto>({
    name: "",
    description: "",
    price: 0,
    sub_category_id: -1,
  });

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
        count === undefined ? 1 : count + 1
      }`,
      category_id: idButtonSelection,
    };
    await createSubcategory(newSubcategory).catch((error) =>
      console.error(error)
    );
    setUpdate({});
  };

  const handleCreateService = async (idSubcategory: number) => {
    const count = services?.filter(
      (service) => service.sub_category_id === idSubcategory).length;
    const newService: CreateOrUpdateServiceDto = {
      name: `New Service ${
        count === undefined ? 1 : count + 1
      }`,
      description: 'Описание услуги',
      price: 1,
      sub_category_id: idSubcategory
    };
    await createService(newService).catch((error) => console.error(error));
    setUpdate({});
  }

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
      category_id: idButtonSelection,
    });
  }, [idChangeSubcategory]);

  useEffect(() => {
    const service: CreateOrUpdateServiceDto = services?.find((service) => service.id === idChangeService)
    ?? {name: "", description: "", price: 0, sub_category_id: -1};
    setNewService({
      name: service.name,
      description: service.description,
      price: service.price,
      sub_category_id: service.sub_category_id
    })
  }, [idChangeService]);

  const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory({ name: event.target.value });
  };

  const handleChangeSubcategory = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewSubcategory({
      name: event.target.value,
      category_id: idButtonSelection,
    });
  };

  const handleChangeService = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
      if (type === 'name') {
        setNewService({...newService, name: event.target.value});
      } else if (type === 'description') {
        setNewService({...newService, description: event.target.value});
      } else if (type === 'price') {
        setNewService({...newService, price: event.target.valueAsNumber});
      } else {
        console.error("Что-то пошло не так, проверьте подсоединение к API");
      }
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

  const handleUpdateService = async (id: number) => {
    await updateService(id, newService).catch((error) => console.error(error));
    openFormChangeService(id);
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

  const handleDeleteService = (id: number) => {
    deleteService(id).catch((error) => console.error(error));
    setUpdate({});
  }

  return (
    <ServicesView
      categories={categories}
      subcategories={subcategories}
      services={services}
      idButtonSelection={idButtonSelection}
      idChangeSubcategory={idChangeSubcategory}
      isOpenChangeCategory={isOpenChangeCategory}
      idChangeService={idChangeService}
      newCategory={newCategory}
      newSubcategory={newSubcategory}
      newService={newService}
      handleChoise={handleChoise}
      handleCreateCategory={handleCreateCategory}
      handleCreateSubcategory={handleCreateSubcategory}
      handleCreateServise={handleCreateService}
      openFormChangeCategory={openFormChangeCategory}
      openFormChangeSubcategory={openFormChangeSubcategory}
      openFormChangeServise={openFormChangeService}
      handleChangeCategory={handleChangeCategory}
      handleChangeSubcategory={handleChangeSubcategory}
      handleChangeService={handleChangeService}
      handleUpdateCategory={handleUpdateCategory}
      handleUpdateSubcategory={handleUpdateSubcategory}
      handleUpdateService={handleUpdateService}
      handleDeleteCategory={handleDeleteCategory}
      handleDeleteSubcategory={handleDeleteSubcategory}
      handleDeleteService={handleDeleteService}
    />
  );
};
