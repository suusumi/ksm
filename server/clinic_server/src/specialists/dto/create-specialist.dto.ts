import {IsString, IsOptional} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSpecialistDto {

    @IsOptional()
    @IsString()
    photo_path: string;

    @ApiProperty()
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
