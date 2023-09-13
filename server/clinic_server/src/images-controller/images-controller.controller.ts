import {Controller, Get, Body, Res, NotFoundException, BadRequestException} from '@nestjs/common';
import { Response } from 'express';
import { imageDTO } from './image.dto';
import * as fs from 'fs';
import * as path from 'path';

@Controller('images')
export class ImagesControllerController {
    @Get()
    async getImage(@Body() imagePath: imageDTO, @Res() res: Response) {
        console.log("Пытаемся отдать на клиента файл по пути: " + imagePath.image_path);
        try {
            // Проверяем существование файла по указанному пути
            if (!fs.existsSync(imagePath.image_path)) {
                // Если файл не найден, отправляем ошибку 404 Not Found
                throw new NotFoundException('Image not found');
            }

            // Получаем расширение файла из имени файла
            const fileExtension = path.extname(imagePath.image_path).toLowerCase();

            // Список расширений изображений, которые мы считаем за изображения
            const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

            // Проверяем, что расширение файла соответствует изображению
            if (!imageExtensions.includes(fileExtension)) {
                // Если это не изображение, отправляем ошибку 400 Bad Request
                throw new BadRequestException('Not an image');
            }

            // Читаем изображение из файла и отправляем его как ответ
            const imageStream = fs.createReadStream(imagePath.image_path);

            imageStream.on('error', (error) => {
                // Обработка ошибки чтения файла
                if (error) {
                    // Если файл не найден, отправляем ошибку 404 Not Found
                    throw new NotFoundException('Image not found');
                } else {
                    // В остальных случаях отправляем ошибку сервера 500 Internal Server Error
                    throw error;
                }
            });

            // Отправляем файл как ответ
            imageStream.pipe(res);

        } catch (error) {
            res.status(404).send('Image not found ' + error.message);
        }
    }
}
