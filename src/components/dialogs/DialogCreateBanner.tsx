import React, { useState } from "react";
import { CreateBannersDto } from "../../api/banners/dto";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import theme from "../../assets/theme/Theme";

interface IDialogCreateBanner {
    open: boolean,
    handleClickOpen: any,
    handleClose: any,
    createBanner: CreateBannersDto,
    selectedImage: File | null,
    setSelectedImage: Function,
    handleCreateBanner: any,
    setBannerLink: (link: string) => void, // добавляем новый пропс для установки ссылки
}

const styles = {
    TitleText: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontSize: '24px',
        font: 'Roboto',
        fontWeight: '500',
    }
}

export const DialogCreateBanner: React.FC<IDialogCreateBanner> = (props) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [bannerLink, setBannerLink] = useState<string>(props.createBanner.text_content);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            if (!validateImage(file)) {
                setErrorMessage('Пожалуйста, выберите изображение в формате JPEG или PNG и размером не более 2 МБ.');
                return;
            }
            props.setSelectedImage(file);
            setErrorMessage(null);
        }
    }

    const validateImage = (file: File) => {
        const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        const maxSize = 2 * 1024 * 1024; // 2 MB

        if (!allowedExtensions.exec(file.name)) {
            return false;
        }
        if (file.size > maxSize) {
            return false;
        }
        return true;
    }

    const handleCreateBanner = async () => {
        try {
            if (props.selectedImage) {
                const formData = new FormData();
                formData.append('image', props.selectedImage);
                formData.append('bodyData', JSON.stringify({
                    ...props.createBanner,
                    text_content: bannerLink,
                }));

                const response = await props.handleCreateBanner(formData);
                if (response.ok) {
                    props.handleClose();
                } else {
                    setErrorMessage('Ошибка при создании баннера.');
                }
            } else {
                setErrorMessage('Пожалуйста, выберите изображение для баннера.');
            }
        } catch (error) {
            console.error('Error creating banner:', error);
            setErrorMessage('Произошла ошибка при создании баннера. Пожалуйста, попробуйте еще раз.');
        }
    }

    const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const link = e.target.value;
        setBannerLink(link);
        props.setBannerLink(link); // обновляем ссылку в родительском компоненте
    }

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose}>
                <DialogTitle style={styles.TitleText}>Добавление нового баннера</DialogTitle>
                <DialogContent>
                    <Grid container direction={'column'} spacing={2} marginTop={'2px'}>
                        <Grid item xs={12}>
                            <input type="file" accept="image/jpeg, image/png" onChange={handleImageChange} />
                            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                            {props.selectedImage && (
                                <div>
                                    <img src={URL.createObjectURL(props.selectedImage)} alt="Selected" width={725.5} height={173} />
                                </div>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Ссылка"
                                fullWidth
                                value={bannerLink}
                                onChange={handleLinkChange}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCreateBanner}>Создать</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}