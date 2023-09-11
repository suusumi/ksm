import {IsString} from "class-validator";

export class CreateBannerDto {

    @IsString()
    title: string;

    @IsString()
    subtitle: string;

    @IsString()
    text_content: string;

    @IsString()
    img_path: string;
}

// model Banners{
//     id Int @id @default(autoincrement())
//     title String
//     subtitle String
//     text_content String @db.Text
//     img_path String?
// }