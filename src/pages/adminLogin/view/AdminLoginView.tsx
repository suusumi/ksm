import React, { FormEventHandler } from "react";
import { Container, Grid, IconButton, InputAdornment } from "@mui/material";
import logo from "../../../assets/content/header-logo.svg";
import { OvalTextField } from "../../../components/OvalTextField/OvalTextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { WarningParagraph } from "../../../components/WarningParagraph/WarningParagraph";
import { LoginButton } from "../../../components/LoginButton/LoginButton";

export interface IAdminLoginView {
    authInfo: { login: string, password: string },
    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    showPassword: boolean
    setShowPassword: Function
    authError: boolean
    handleSubmit: FormEventHandler<HTMLFormElement>
}

export const AdminLoginView: React.FC<IAdminLoginView> = (props) => {

    return <Container maxWidth={'xs'}>
        <form onSubmit={props.handleSubmit}>
        <Grid container direction={"column"} alignItems={"center"} height={'100vh'}>
        <Grid item xs />

        <Grid item xs={5}>
            <Grid container direction={"column"} spacing={3}>
                <Grid item>
                    <img alt={"Logo"} src={logo} />
                </Grid>

                <Grid item>
                    <OvalTextField
                        variant="outlined"
                        fullWidth
                        onChange={props.handleChange}
                        label="Логин"
                        name={"login"}
                        value={props.authInfo.login}
                    />
                </Grid>

                <Grid item>
                    <OvalTextField
                        variant="outlined"
                        fullWidth
                        onChange={props.handleChange}
                        label="Пароль"
                        name={"password"}
                        value={props.authInfo.password}
                        type={props.showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        style={{ paddingRight: '1rem' }}
                                        onClick={() => props.setShowPassword((prevState: boolean) => !prevState)}
                                        edge='end'
                                    >
                                        {props.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>,
                        }}
                    />
                    {props.authError && <WarningParagraph variant="subtitle2">Неверный логин или пароль</WarningParagraph>}
                </Grid>

                <Grid item>
                    <LoginButton
                        type="submit"
                        fullWidth
                    >ВОЙТИ</LoginButton>
                </Grid>
            </Grid>
        </Grid>

        <Grid item xs />
    </Grid>
        </form>
    </Container>
}