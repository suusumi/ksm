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
        setIsChanging(changing);
    }

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

    // useEffect(() => {
    //     // console.log(services);
    //     console.log(idButtonSelection, services[idButtonSelection]);
    // }, [idButtonSelection])

    useEffect(() => {
        console.log(services);
    }, [services])

    return (
        <ServicesView
            services={services}
            idButtonSelection={idButtonSelection}
            handleChoise={handleChoise}
            isChanging={isChanging}
            changingService={changingService}
            deleteService={deleteService}
        />
    )
}