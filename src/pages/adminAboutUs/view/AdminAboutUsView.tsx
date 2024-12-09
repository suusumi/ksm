import React, { useState } from "react";
import { Typography, TextField, Button, CircularProgress, Box } from "@mui/material";
import { AdminAboutUsModel } from "../model/AdminAboutUsModel";

const BASE_URL = "http://localhost:8081/images";

export const AdminAboutUsView: React.FC<AdminAboutUsModel & {
    localContent: string;
    onUpdateContent: (content: string) => void;
    onSaveChanges: () => void;
}> = ({
          aboutUs,
          loading,
          error,
          localContent,
          onUpdateContent,
          onUpdateImage,
          onSaveChanges,
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
            setPreviewImage(URL.createObjectURL(file)); // Предпросмотр
            onUpdateImage(file); // Сохраняем файл в локальном состоянии
        }
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
                value={localContent} // Используем локальное состояние
                onChange={(e) => onUpdateContent(e.target.value)} // Обновляем локальное состояние
                margin="normal"
            />

            {/* Изображения */}
            <Box display="flex" flexDirection="column" gap="16px" marginTop="16px">
                <Typography>Текущее изображение:</Typography>
                {aboutUs?.imageUrl && (
                    <img
                        src={`${BASE_URL}/${aboutUs.imageUrl}`} // Текущее изображение
                        alt="Текущее изображение"
                        style={{
                            maxWidth: "100%",
                            maxHeight: "200px",
                            objectFit: "contain",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        }}
                    />
                )}

                <Typography>Новое изображение (предпросмотр):</Typography>
                {previewImage && (
                    <img
                        src={previewImage}
                        alt="Новое изображение"
                        style={{
                            maxWidth: "100%",
                            maxHeight: "200px",
                            objectFit: "contain",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        }}
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
                onClick={onSaveChanges} // Сохраняем данные только при нажатии
                style={{ marginTop: "16px" }}
            >
                Сохранить изменения
            </Button>
        </div>
    );
};
