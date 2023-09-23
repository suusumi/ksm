import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import theme from "../../../assets/theme/Theme";
import { IInfographicsView } from "../model/InfographicsModel";

const styles = {
    TitleText: {
        color: '#288e81',
        textDecoration: 'none',
        fontSize: 65,
        // TODO: шрифт Austin Normal, возможно Regular
        fontFamily: 'AustinMedium, sans-serif'
    },
    StandartText: {
        color: 'black',
        textDecoration: 'none',
        fontSize: 22,
        fontFamily: 'PT-Sans, sans-serif',
        maxWidth: '250px'
    },
}

export const InfographicsView: React.FC<IInfographicsView> = (props) => {

    return (
        <Grid container direction={'column'} spacing={3}>
            <Grid item xs={1}>
                <Typography style={{ font: 'Roboto', fontWeight: '500', fontSize: '24px', color: theme.palette.primary.main, }}>
                    НАСТРОЙКА ИНФОГРАФИКИ
                </Typography>
            </Grid>

            <Grid item xs={4}>
                <Grid container direction={'row'} spacing={3}>
                    {props.data?.map((infographic) => (
                        <Grid item xs={4}>
                            <Grid container direction={'column'} spacing={3}>
                                <Grid item xs={6}>
                                    <TextField
                                        id={"InfogrpahicsNumber" + infographic.id}
                                        fullWidth
                                        variant="outlined"
                                        label="Цифровая инфографика"
                                        value={infographic.value}
                                        onChange={(event) => props.handleNumberInfographicsChange(event, infographic.id)}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        id="firstInfogrpahicstText"
                                        fullWidth
                                        variant="outlined"
                                        label="Первая текстовая инфографика"
                                        value={infographic.description}
                                        onChange={(event) => props.handleTextInfographicsChange(event, infographic.id)}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>))}
                </Grid>
            </Grid>

            <Grid item xs={2}>
                <Grid container direction={"row-reverse"}>
                    <Grid item>
                        <Button onClick={props.handleSave} sx={{
                            color: 'white',
                            backgroundColor: theme.palette.primary.main,
                            fonstSize: '14px',
                            borderRadius: '30px',
                            textTransform: 'none',
                            padding: '8px 26px',
                            whiteSpace: 'nowrap'
                        }}>Сохранить</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={1}>
                <Typography style={{ font: 'Roboto', fontWeight: '500', fontSize: '24px', color: theme.palette.primary.main, }}>
                    КАК БУДЕТ ВЫГЛЯДЕТЬ ИНФОГРАФИКА
                </Typography>
            </Grid>

            <Grid item xs={4}>
                <Grid container direction={'row'} spacing={3}>
                    {props.data?.map((infographic) => (<Grid item xs={4}>
                        <Typography style={styles.TitleText}>{infographic.value}</Typography>
                        <Typography style={styles.StandartText}>{infographic.description}</Typography>
                    </Grid>))}
                </Grid>
            </Grid>
        </Grid>
    );
}