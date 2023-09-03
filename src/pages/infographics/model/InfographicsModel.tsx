import { MouseEventHandler } from "react";

export interface InfographicsItem {
    id: number;
    title: string;
    description: string;
};

export interface IInfographicsView {
    data: InfographicsItem[],
    handleNumberInfographicsChange: Function,
    handleTextInfographicsChange: Function,
    handleSave: MouseEventHandler<HTMLButtonElement>,
}