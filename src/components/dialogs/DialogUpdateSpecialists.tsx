import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Grid } from "@mui/material";
import theme from "../../assets/theme/Theme";
import { UpdateSpecialistDto } from "../../api/specialists/dto";
import { IMAGE_URL } from "../../utils/constants/url.constants";

interface IDialogUpdateSpecialists {
    open: boolean,
    handleClickOpen: any,
    handleClose: any,
    updateSpecialist: UpdateSpecialistDto,
    handleChangeSpecialistForm: Function,
    selectedImage: File | null,
    setSelectedImage: Function,
    handleUpdateSpecialist: any,
    photo_path: string,
    id: number
}

const styles = {
    TitleText: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontSize: '24px',
        font: 'Roboto',
        fontWeight: '500',
    },
}

export const DialogUpdateSpecialists: React.FC<IDialogUpdateSpecialists> = (props) => {
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
        const maxSize = 2 * 1024 * 1024; // 2MB

        if (!allowedExtensions.exec(file.name)) {
            return false;
        }
        if (file.size > maxSize) {
            return false;
        }
        return true;
    };

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose}>
                <DialogTitle style={styles.TitleText}>Настройка специалиста</DialogTitle>
                <DialogContent>
                    <Grid container direction={'column'} spacing={3} marginTop={'2px'}>
                        <Grid item xs={2}>
                            <TextField
                                id="createNameSpecialist"
                                fullWidth
                                variant="outlined"
                                label="ФИО специалиста"
                                value={props.updateSpecialist.name}
                                onChange={(event) => props.handleChangeSpecialistForm(event, 'name')}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <TextField
                                id="createPostSpecialist"
                                fullWidth
                                variant="outlined"
                                label="Должность специалиста"
                                value={props.updateSpecialist.post}
                                onChange={(event) => props.handleChangeSpecialistForm(event, 'post')}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <TextField
                                id="createSpeialitySpecialist"
                                fullWidth
                                variant="outlined"
                                label="Специализация специалиста"
                                value={props.updateSpecialist.speciality}
                                onChange={(event) => props.handleChangeSpecialistForm(event, 'speciality')}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <TextField
                                id="createDegreeSpecialist"
                                fullWidth
                                variant="outlined"
                                label="Образование специалиста"
                                value={props.updateSpecialist.degree}
                                onChange={(event) => props.handleChangeSpecialistForm(event, 'degree')}
                            /></Grid>

                        <Grid item xs={4}>
                            <input type="file" accept="image/jpeg, image/png" onChange={handleImageChange} />
                            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                            <div>
                                <img src={props.selectedImage ? URL.createObjectURL(props.selectedImage) : IMAGE_URL + props.photo_path} alt="Selected" width={260} height={346} />
                            </div>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleUpdateSpecialist}>Сохранить</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}