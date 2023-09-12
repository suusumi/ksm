import {IsString, IsOptional} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSpecialistDto {

    @IsOptional()
    @IsString()
    photo_path: string;

    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    post: string;

    @IsOptional()
    @IsString()
    speciality: string;

    @IsOptional()
    @IsString()
    degree: string;

}
