import React from "react"
import { ButtonGroup, IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

interface ChangingButtonsProps {
    id: number,
    handleOpen: Function,
    handleDelete: Function,
}

export const ChangingButtons: React.FC<ChangingButtonsProps> = ({ id, handleOpen, handleDelete }) => {
    return (
        <ButtonGroup>
            <IconButton aria-label="edit"
                onClick={() => handleOpen()}
                sx={{ paddingY: 0 }}
            >
                <EditOutlinedIcon />
            </IconButton>

            <IconButton aria-label='delete'
                onClick={() => handleDelete(id)}
                sx={{ paddingY: 0 }}
            >
                <DeleteOutlineOutlinedIcon />
            </IconButton>
        </ButtonGroup>
    );
}

interface ChangingButtonsEditProps {
    id: number,
    handleUpdate: Function,
    handleClose: Function,
}

export const ChangingButtonsEdit: React.FC<ChangingButtonsEditProps> = ({ id, handleUpdate, handleClose }) => {
    return (
        <ButtonGroup>
            <IconButton aria-label="save"
                onClick={() => handleUpdate(id)}
                sx={{ paddingY: 0 }}
            >
                <CheckIcon />                
            </IconButton>

            <IconButton aria-label="close"
            onClick={() => handleClose()}>
                <CloseIcon />
            </IconButton>
        </ButtonGroup>
    );
}