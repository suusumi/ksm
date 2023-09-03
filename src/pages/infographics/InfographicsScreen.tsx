import React, { MouseEventHandler, useEffect, useState } from "react";
import { InfographicsView } from "./view/InfographicsView";
import { InfographicsItem } from "./model/InfographicsModel";

export const InfographicsScreen = () => {
    const [data, setData] = useState<InfographicsItem[]>([
        { id: 1, title: '35+', description: 'Специалистов из разных областей' },
        { id: 2, title: '17', description: 'Лет на страже вашего здоровья' },
        { id: 3, title: '18+', description: 'Областей медицинской помощи' },
    ]);

    const handleNumberInfographicsChange = (event: any, id: number) => {
        const numberInfographics = data.map((data) => {
            return data.id === id ? { ...data, title: event.target.value } : { ...data }
        });

        setData(numberInfographics);
    };

    const handleTextInfographicsChange = (event: any, id: number) => {
        const textInfographics = data.map((data) => {
            return data.id === id ? { ...data, description: event.target.value } : { ...data }
        });

        setData(textInfographics);
    };

    const handleSave:MouseEventHandler<HTMLButtonElement> = () => {
        const saveData = data; 
        console.log(saveData);
        console.log("Сохранено");
        
    }

    return (
        <InfographicsView
            data={data}
            handleNumberInfographicsChange={handleNumberInfographicsChange}
            handleTextInfographicsChange={handleTextInfographicsChange}
            handleSave={handleSave}
        />
    );
}