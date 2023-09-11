import {IsString} from "class-validator";

export class CreateSpecialistDto {
    @IsString()
    photo_path: string;

    @IsString()
    name: string;

    @IsString()
    post: string;

    @IsString()
    speciality: string;

    @IsString()
    degree: string;

}
