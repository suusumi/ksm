import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Grid } from "@mui/material";
import theme from "../../assets/theme/Theme";
import { CreateSpecialistDto } from "../../api/specialists/dto";

interface IDialogCreateSpecialists {
    open: boolean,
    handleClickOpen: any,
    handleClose: any,
    createSpecialist: CreateSpecialistDto,
    handleChangeSpecialistForm: Function,
    selectedImage: File | null,
    setSelectedImage: Function,
    handleCreateSpecialist: any
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

export const DialogCreateSpecialists: React.FC<IDialogCreateSpecialists> = (props) => {
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
                <DialogTitle style={styles.TitleText}>Создание нового специалиста</DialogTitle>
                <DialogContent>
                    <Grid container direction={'column'} spacing={3} marginTop={'2px'}>
                        <Grid item xs={2}>
                            <TextField
                                id="createNameSpecialist"
                                fullWidth
                                variant="outlined"
                                label="ФИО специалиста"
                                value={props.createSpecialist.name}
                                onChange={(event) => props.handleChangeSpecialistForm(event, 'name')}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <TextField
                                id="createPostSpecialist"
                                fullWidth
                                variant="outlined"
                                label="Должность специалиста"
                                value={props.createSpecialist.post}
                                onChange={(event) => props.handleChangeSpecialistForm(event, 'post')}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <TextField
                                id="createSpeialitySpecialist"
                                fullWidth
                                variant="outlined"
                                label="Специализация специалиста"
                                value={props.createSpecialist.speciality}
                                onChange={(event) => props.handleChangeSpecialistForm(event, 'speciality')}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <TextField
                                id="createDegreeSpecialist"
                                fullWidth
                                variant="outlined"
                                label="Образование специалиста"
                                value={props.createSpecialist.degree}
                                onChange={(event) => props.handleChangeSpecialistForm(event, 'degree')}
                            /></Grid>

                        <Grid item xs={4}>
                            <input type="file" accept="image/jpeg, image/png" onChange={handleImageChange} />
                            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                            {props.selectedImage && (
                                <div>
                                    <img src={URL.createObjectURL(props.selectedImage)} alt="Selected" width={260} height={346} />
                                </div>
                            )}
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleCreateSpecialist}>Создать</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}