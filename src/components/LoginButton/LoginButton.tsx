import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "../../assets/theme/Theme";

export const LoginButton = styled(Button)<ButtonProps>(() => ({
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    padding: 12,
    borderRadius: 10,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark
    }
}))