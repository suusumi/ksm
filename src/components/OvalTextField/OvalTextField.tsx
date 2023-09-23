import React from "react";
import { InputProps, TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "../../assets/theme/Theme";

export const OvalTextField = styled((props: TextFieldProps) => (
    <TextField 
        {...props}
        InputProps={{...props.InputProps} as Partial<InputProps>}
    />))(() => ({
        '& .MuiOutlinedInput-root': {
            border: '0.5px #f1f1f1',
            overfllow: 'hidden',
            borderRadius: 10,
            backgroundColor: 'white',
            fontWeight: '600',
            borderColor: '#DEDEE5',
            '&.Mui-focused': {
                backgroundColor: 'white',
                borderColor: theme.palette.primary.main,
            },
        },
}))