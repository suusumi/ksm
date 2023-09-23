import { MouseEventHandler } from "react";
import { InfographicsDto } from "../../../api/infographics/dto";

export interface IInfographicsView {
    data: InfographicsDto[] | undefined,
    handleNumberInfographicsChange: Function,
    handleTextInfographicsChange: Function,
    handleSave: MouseEventHandler<HTMLButtonElement>,
}