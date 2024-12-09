import React from "react";
import { Typography, TextField, Button, CircularProgress } from "@mui/material";
import { AdminAboutUsModel } from "../model/AdminAboutUsModel";

export const AdminAboutUsView: React.FC<AdminAboutUsModel> = ({
                                                                  aboutUs,
                                                                  loading,
                                                                  error,
                                                                  onUpdate,
                                                                  onUpdateImage,
                                                              }) => {
    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            onUpdateImage(event.target.files[0]);
        }
    };

    return (
        <div>
            <Typography variant="h4">Редактирование информации О НАС</Typography>
            <TextField
                label="Содержимое"
                fullWidth
                multiline
                rows={4}
                value={aboutUs?.content || ""}
                onChange={(e) => onUpdate({ content: e.target.value })}
            />
            <div>
                <Typography>Текущее изображение:</Typography>
                {aboutUs?.imageUrl && <img src={aboutUs.imageUrl} alt="О нас" style={{ maxWidth: "100%" }} />}
                <input type="file" onChange={handleFileChange} />
            </div>
            <Button variant="contained" color="primary" onClick={() => onUpdate({ content: aboutUs?.content || "" })}>
                Сохранить изменения
            </Button>
        </div>
    );
};
