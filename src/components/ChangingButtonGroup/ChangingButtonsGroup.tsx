import React from "react"
import { ButtonGroup, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface IChangingButton {
    changingService: Function,
    changing: string,
    deleteService: Function,
    idTitle: number,
    idSubCategory: number,
    idService: number,
}

export const ChangingButtons: React.FC<IChangingButton> = ({ changingService, changing, deleteService, idTitle, idSubCategory, idService }) => {
    return (
        <ButtonGroup>
            <IconButton aria-label="edit"
                onClick={(event) => changingService(event, changing)}
                sx={{ paddingY: 0 }}
            >
                <EditIcon />
            </IconButton>

            <IconButton aria-label='delete'
                onClick={(event) => deleteService(event, idTitle, idSubCategory, idService)}
                sx={{ paddingY: 0 }}
            >
                <DeleteIcon />
            </IconButton>
        </ButtonGroup>
    );
}