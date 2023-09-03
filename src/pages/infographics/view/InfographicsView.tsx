import { Grid, TextField, Typography } from "@mui/material";
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
                    <Grid item xs={4}>
                        <Grid container direction={'column'} spacing={3}>
                            <Grid item xs={6}>
                                <TextField
                                    id="firstInfogrpahicsNumber"
                                    fullWidth
                                    variant="outlined"
                                    label="Первая цифровая инфографика"
                                    value={props.data[0]?.title}
                                    onChange={(event) => props.handleNumberInfographicsChange(event, props.data[0].id)}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    id="firstInfogrpahicstText"
                                    fullWidth
                                    variant="outlined"
                                    label="Первая текстовая инфографика"
                                    value={props.data[0]?.description}
                                    onChange={(event) => props.handleTextInfographicsChange(event, props.data[0].id)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={4}>
                        <Grid container direction={'column'} spacing={3}>
                            <Grid item xs={6}>
                                <TextField
                                    id="secondInfogrpahicsNumber"
                                    fullWidth
                                    variant="outlined"
                                    label="Вторая цифровая инфографика"
                                    value={props.data[1]?.title}
                                    onChange={(event) => props.handleNumberInfographicsChange(event, props.data[1].id)}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    id="secondInfogrpahicstText"
                                    fullWidth
                                    variant="outlined"
                                    label="Вторая текстовая инфографика"
                                    value={props.data[1]?.description}
                                    onChange={(event) => props.handleTextInfographicsChange(event, props.data[1].id)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={4}>
                        <Grid container direction={'column'} spacing={3}>
                            <Grid item xs={6}>
                                <TextField
                                    id="thirdInfogrpahicsNumber"
                                    fullWidth
                                    variant="outlined"
                                    label="Третья цифровая инфографика"
                                    value={props.data[2]?.description}
                                    onChange={(event) => props.handleNumberInfographicsChange(event, props.data[2].id)}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    id="thirdInfogrpahicstText"
                                    fullWidth
                                    variant="outlined"
                                    label="Третья текстовая инфографика"
                                    value={props.data[2]?.description}
                                    onChange={(event) => props.handleTextInfographicsChange(event, props.data[2].id)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={1}>
                <Typography style={{ font: 'Roboto', fontWeight: '500', fontSize: '24px', color: theme.palette.primary.main, }}>
                    КАК БУДЕТ ВЫГЛЯДЕТЬ ИНФОГРАФИКА
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Grid container direction={'row'} spacing={3}>
                    <Grid item xs={4}>
                        <Typography style={styles.TitleText}>{props.data[0]?.title}</Typography>
                        <Typography style={styles.StandartText}>{props.data[0]?.description}</Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography style={styles.TitleText}>{props.data[1]?.title}</Typography>
                        <Typography style={styles.StandartText}>{props.data[1]?.description}</Typography>                    </Grid>

                    <Grid item xs={4}>
                        <Typography style={styles.TitleText}>{props.data[2]?.title}</Typography>
                        <Typography style={styles.StandartText}>{props.data[2]?.description}</Typography>                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}