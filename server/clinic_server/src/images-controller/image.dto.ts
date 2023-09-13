import {IsString} from "class-validator";

export class imageDTO {

    @IsString()
    image_path: string;
}