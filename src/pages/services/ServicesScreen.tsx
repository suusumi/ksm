import React, { useEffect, useState } from "react";
import { ServicesView } from "./view/ServicesView";
import { ServicesDto, data1 } from "./model/ServicesModel";

export const ServicesScreen = () => {

    const [services, setServices] = useState<ServicesDto>(data1);
    const [idButtonSelection, setIdButtonSelection] = useState(0);
    const [isChanging, setIsChanging] = useState<string>("");

    const handleChoise = (event: any, id: number) => {
        setIdButtonSelection(id);
    };

    const changingService = (event: any, changing: string) => {
        if (isChanging === changing) {
            setIsChanging('');
        } else {
            setIsChanging(changing);
        }
    }

    const handleChangeTitle = (event: any, id: number) => {
        let newServices = [...services];
        newServices[id].categoryTitle = event.target.value;
        setServices(newServices);
    };

    const handleChangeCategory = (event: any, idTitle: number, idCategory: number) => {
        let newServices = [...services];
        newServices[idTitle].subcategories[idCategory].subcategoryTitle = event.target.value;
        setServices(newServices);
    }

    const handleChangeService = (event: any, idTitle: number, idCategory: number, idService: number, type: string) => {
        let newServices = [...services];
        if (type === 'title') {
            newServices[idTitle].subcategories[idCategory].services[idService].serviceText = event.target.value;
        } else if (type === 'price') {
            newServices[idTitle].subcategories[idCategory].services[idService].price = event.target.value;
        } else if (type === 'ID') {
            newServices[idTitle].subcategories[idCategory].services[idService].serviceID = event.target.value;
        } else {
            console.log("Что-то пошло не так");
        }
        setServices(newServices);
    }


    useEffect(() => {
        console.log(services);
    }, [services]);

    const deleteService = (event: any, idTitle: number, idSubCategory: number, idService: number) => {
        let newServiceArray = [...services];
        if (idSubCategory === -1 && idService === -1) {
            console.log('Удаляю вот эту категорию: ', newServiceArray[idTitle]);
            newServiceArray.splice(idTitle, 1);
        } else if (idSubCategory !== -1 && idService === -1) {
            console.log('Удаляю вот эту подкатегорию: ', newServiceArray[idTitle].subcategories[idSubCategory]);
            newServiceArray[idTitle].subcategories.splice(idSubCategory, 1);
        } else if (idSubCategory !== -1 && idService !== -1) {
            console.log('Удаляю вот эту услугу: ', newServiceArray[idTitle].subcategories[idSubCategory].services[idService]);
            newServiceArray[idTitle].subcategories[idSubCategory].services.splice(idService, 1);
        } else {
            console.log('Error, что-то тут не так');
        }

        setServices(newServiceArray);
    }

    return (
        <ServicesView
            services={services}
            idButtonSelection={idButtonSelection}
            handleChoise={handleChoise}
            isChanging={isChanging}
            changingService={changingService}
            deleteService={deleteService}
            handleChangeTitle={handleChangeTitle}
            handleChangeCategory={handleChangeCategory}
            handleChangeService={handleChangeService}
        />
    )
}