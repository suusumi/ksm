import React, { useContext } from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import logo from "../../assets/content/header-logo.svg";
import PrimaryButton from "../primaryButton/PrimaryButton";
import theme from "../../assets/theme/Theme";
import { routes } from "../../assets/routes/routes";
import { AuthContext } from "../../utils/context/AuthContext";

const styles = {
    buttonExit: {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        fonstSize: '14px',
        borderRadius: '30px',
        textTransform: 'none',
        padding: '8px 26px',
        whiteSpace: 'nowrap',
    },
    button: {
        color: 'black',
        fontSize: '14px',
        textTransform: 'none',
        padding: '8px 16px',
        whiteSpace: 'nowrap',
    }
}

export const HeaderAdmin = () => {
    const auth = useContext(AuthContext);
    const handleLogin = () => {
        auth.logout();
        window.location.href = '/';
    }
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ paddingY: '10px', borderRadius: '0 0 20px 20px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>
                <Toolbar>
                    <Typography component="div" sx={{ flexGrow: 1 }}>
                        <img src={logo} alt="Логотип" style={{ width: '30%'}}/>
                    </Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                        <Button href={routes.infographics} color="inherit" sx={styles.button}>Инфографика</Button>
                        <Button href={routes.banners} color="inherit" sx={styles.button}>Баннеры</Button>
                        <Button href={routes.specialists} color="inherit" sx={styles.button}>Специалисты</Button>
                        <Button href={routes.services} color="inherit" sx={styles.button}>Услуги</Button>
                        <Button href={routes.adminDocs} color="inherit" sx={styles.button}>Документы</Button>
                        <Button href={routes.adminAboutUs} color="inherit" sx={styles.button}>О нас</Button>
                    </Box>

                    <Button color="inherit" onClick={() => handleLogin()} sx={styles.buttonExit}>ВЫЙТИ</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}