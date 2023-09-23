import React, { MouseEventHandler, useEffect, useState } from "react";
import { InfographicsView } from "./view/InfographicsView";
import { fetchAllInfogrpaphics, updateInfographicsById } from "../../api/infographics/request";
import { CreateInfographicsDto, InfographicsDto } from "../../api/infographics/dto";
import { error } from "console";

export const InfographicsScreen = () => {
    const [infographics, setInfographics] = useState<InfographicsDto[]>();

    useEffect(() => {
        fetchAllInfogrpaphics()
            .then((response) => { return response.json() })
            .then((data) => {
                setInfographics(data);
            })
            .catch((error) => console.error(error))
    }, []);

    const handleNumberInfographicsChange = (event: any, id: number) => {
        const numberInfographics = infographics?.map((data) => {
            return data.id === id ? { ...data, value: event.target.value } : { ...data }
        });

        setInfographics(numberInfographics);
    };

    const handleTextInfographicsChange = (event: any, id: number) => {
        const textInfographics = infographics?.map((data) => {
            return data.id === id ? { ...data, description: event.target.value } : { ...data }
        });

        setInfographics(textInfographics);
    };

    const handleSave: MouseEventHandler<HTMLButtonElement> = async () => {
        infographics?.map((data) => {
            const updateInfographics = {
                'value': data.value,
                'description': data.description
            }
            updateInfographicsById(data.id, updateInfographics);
        });
    }

    return (
        <InfographicsView
            data={infographics}
            handleNumberInfographicsChange={handleNumberInfographicsChange}
            handleTextInfographicsChange={handleTextInfographicsChange}
            handleSave={handleSave}
        />
    );
}