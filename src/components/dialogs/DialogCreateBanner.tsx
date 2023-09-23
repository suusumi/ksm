import React, { useState } from "react";
import { CreateBannersDto } from "../../api/banners/dto";
import theme from "../../assets/theme/Theme";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";

interface IDialogCreateBanner {
    open: boolean,
    handleClickOpen: any,
    handleClose: any,
    createBanner: CreateBannersDto,
    selectedImage: File | null,
    setSelectedImage: Function,
    handleCreateBanner: any,
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

    return (<div>
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle style={styles.TitleText}>Дабавления нового баннера</DialogTitle>
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
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleCreateBanner}>Создать</Button>
            </DialogActions>
        </Dialog>
    </div>);
}