import {IsNumber, IsOptional, IsPositive, IsString} from "class-validator";
import {ServiceType, CategoryType} from "@prisma/client";

export class CreateServiceDto {

    @IsString()
    type: ServiceType;

    @IsString()
    category: CategoryType;

    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsPositive()
    price: number;
}

// type        ServiceType  @default(AllergologyAndImmunology)
// category    CategoryType @default(ReceptionAndInspectionAndConsultation)
// name        String
// description String?
//     price       Int
