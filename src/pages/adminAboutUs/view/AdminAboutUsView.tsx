import React, { useState } from "react";
import { Typography, TextField, Button, CircularProgress, Box } from "@mui/material";
import { AdminAboutUsModel } from "../model/AdminAboutUsModel";

export const AdminAboutUsView: React.FC<AdminAboutUsModel> = ({
                                                                  aboutUs,
                                                                  loading,
                                                                  error,
                                                                  onUpdate,
                                                                  onUpdateImage,
                                                              }) => {
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setPreviewImage(URL.createObjectURL(file)); // Создаем URL для предварительного просмотра
            onUpdateImage(file); // Вызываем функцию обновления изображения
        }
    };

    const getFullImageUrl = (fileName: string): string => {
        const baseUrl = "http://localhost:8081/images"; // Используем базовый путь, где раздаются изображения
        return `${baseUrl}/${fileName}`;
    };


    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Редактирование информации О НАС
            </Typography>

            {/* Поле для изменения содержимого */}
            <TextField
                label="Содержимое"
                fullWidth
                multiline
                rows={4}
                value={aboutUs?.content || ""}
                onChange={(e) => onUpdate({ content: e.target.value })}
                margin="normal"
            />

            {/* Изображения */}
            <Box display="flex" flexDirection="column" gap="16px" marginTop="16px">
                <Typography>Текущее изображение:</Typography>
                {aboutUs?.imageUrl && (
                    <img
                        src={getFullImageUrl(aboutUs.imageUrl)} // Формируем полный URL
                        alt="Текущее изображение"
                        style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "contain", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                )}

                <Typography>Новое изображение (предпросмотр):</Typography>
                {previewImage && (
                    <img
                        src={previewImage}
                        alt="Новое изображение"
                        style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "contain", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                )}

                <Button
                    variant="outlined"
                    component="label"
                    style={{ alignSelf: "start" }}
                >
                    Загрузить изображение
                    <input type="file" hidden onChange={handleFileChange} />
                </Button>
            </Box>

            {/* Сохранение изменений */}
            <Button
                variant="contained"
                color="primary"
                onClick={() => onUpdate({ content: aboutUs?.content || "" })}
                style={{ marginTop: "16px" }}
            >
                Сохранить изменения
            </Button>
        </div>

    );
};
