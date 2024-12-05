import React from "react";
import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

interface ConfirmDeleteDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    documentName: string; // Имя удаляемого документа
}

export const ConfirmDeleteDialog: React.FC<ConfirmDeleteDialogProps> = ({
                                                                            open,
                                                                            onClose,
                                                                            onConfirm,
                                                                            documentName,
                                                                        }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                Вы уверены, что хотите удалить документ "{documentName}"?
            </DialogTitle>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Отмена
                </Button>
                <Button onClick={onConfirm} color="error" variant="contained">
                    Удалить
                </Button>
            </DialogActions>
        </Dialog>
    );
};
