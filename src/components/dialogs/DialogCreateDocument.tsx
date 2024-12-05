import theme from "../../assets/theme/Theme";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Grid } from "@mui/material";
import { useState } from "react";

interface IDialogCreateDocument {
    open: boolean;
    handleClickOpen: () => void;
    handleClose: () => void;
    createDocument: {
        name: string;
        description: string;
        file_name: string;
    };
    handleChangeDocumentForm: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => void;
    handleCreateDocument: () => void;
}

const styles = {
    TitleText: {
        color: theme.palette.primary.main,
        textDecoration: "none",
        fontSize: "24px",
        fontFamily: "Roboto",
        fontWeight: "500",
    },
};

export const DialogCreateDocument: React.FC<IDialogCreateDocument> = (props) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Обработка изменения ссылки с валидацией
    const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const link = event.target.value;
        if (!validateLink(link)) {
            setErrorMessage("Пожалуйста, введите корректный URL.");
            return;
        }
        setErrorMessage(null);
        props.handleChangeDocumentForm(event, "file_name");
    };

    const validateLink = (link: string): boolean => {
        const urlPattern = /^(https?:\/\/|www\.|[a-z0-9]+\.[a-z]{2,}|\/).+/i;
        return urlPattern.test(link);
    };



    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle style={styles.TitleText}>
                {props.createDocument.name ? "Редактирование документа" : "Создание нового документа"}
            </DialogTitle>
            <DialogContent>
                <Grid container direction="column" spacing={3}>
                    {/* Поле Название */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Название документа"
                            value={props.createDocument.name}
                            onChange={(event) => props.handleChangeDocumentForm(event, "name")}
                        />
                    </Grid>
                    {/* Поле Описание */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Описание документа"
                            multiline
                            rows={4}
                            value={props.createDocument.description}
                            onChange={(event) => props.handleChangeDocumentForm(event, "description")}
                        />
                    </Grid>
                    {/* Поле Ссылка */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Ссылка на файл"
                            value={props.createDocument.file_name}
                            onChange={handleLinkChange}
                            error={!!errorMessage}
                            helperText={errorMessage}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                {/* Кнопка Отмена */}
                <Button onClick={props.handleClose} color="secondary">
                    Отмена
                </Button>
                {/* Кнопка Сохранить */}
                <Button onClick={props.handleCreateDocument} color="primary" variant="contained">
                    Сохранить
                </Button>
            </DialogActions>
        </Dialog>
    );
};
