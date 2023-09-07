import React from "react";
import { IServicesView } from "../model/ServicesModel";
import { Button, Divider, Grid, Typography } from "@mui/material";
import theme from "../../../assets/theme/Theme";
import { ChangingButtons } from "../../../components/ChangingButtonGroup/ChangingButtonsGroup";

const styles = {
    textHeader: {
        font: 'Roboto',
        fontWeight: '500',
        fontSize: '24px',
        color: theme.palette.primary.main,
    },
    textCategoryTitle: {
        font: 'PT Sans',
        fontWeight: '500',
        fontSize: '20px',
        color: '#000',
    }
}

export const ServicesView: React.FC<IServicesView> = (props) => {
    return (
        <Grid container direction={'column'} spacing={3} pt={1} >
            <Grid item xs={1}>
                <Typography style={styles.textHeader}>
                    НАСТРОЙКА УСЛУГ
                </Typography>
            </Grid>

            <Grid item xs={3}>
                <Grid container direction={'row'} spacing={3}>
                    {props.services.map((service) => {
                        return <Grid item paddingTop={'14px'}>
                            <Button
                                variant={service.id === props.idButtonSelection ? 'contained' : 'outlined'}
                                size="large"
                                onClick={(event) => props.handleChoise(event, service.id)}
                            >
                                {service.categoryTitle}
                            </Button>
                        </Grid>
                    })}
                </Grid>
            </Grid>

            <Grid item xs={8}>
                {props.services.map((service, indexService) => {
                    if (service.id === props.idButtonSelection) {
                        return (<Grid container direction={'column'}>
                            {/* TODO: Сделать все в одном гриде и менять только Typography на InputBox */}
                            {props.isChanging !== 'title' && <Grid item xs={2} sx={{ display: 'inline-flex' }}>
                                <Typography style={styles.textHeader}>
                                    {service.categoryTitle}
                                </Typography>

                                <ChangingButtons
                                    changing="title"
                                    changingService={props.changingService}
                                    deleteService={props.deleteService}
                                    idTitle={indexService}
                                    idSubCategory={-1}
                                    idService={-1}
                                />
                            </Grid>}

                            {props.isChanging === 'title' && <Grid item xs={2} sx={{ display: 'inline-flex' }}>
                                <Typography>ЭТО ИЗМЕНЕНИЕ</Typography>
                                <ChangingButtons
                                    changing=""
                                    changingService={props.changingService}
                                    deleteService={props.deleteService}
                                    idTitle={indexService}
                                    idSubCategory={-1}
                                    idService={-1}
                                />
                            </Grid>}

                            <Grid item xs={10}>
                                <Grid container direction={'column'} spacing={2} margin={0} padding={0}>
                                    {service.subcategories.map((category, indexCategory) => {
                                        return (
                                            <Grid item>
                                                <Grid container direction={'row'} justifyContent={'space-between'}>
                                                    <Grid item sx={{ display: 'inline-flex' }}>
                                                        <Typography style={styles.textCategoryTitle}>
                                                            {category.subcategoryTitle}
                                                        </Typography>

                                                        <ChangingButtons
                                                            changing="category"
                                                            changingService={props.changingService}
                                                            deleteService={props.deleteService}
                                                            idTitle={indexService}
                                                            idSubCategory={indexCategory}
                                                            idService={-1}
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Divider />

                                                <Grid container direction={'column'} paddingTop={2} margin={0} spacing={3}>
                                                    {category.services.map((ser, indexService) => {
                                                        return (<Grid item>
                                                            <Grid container direction={'row'} spacing={5} padding={0} margin={0}>
                                                                <Grid item xs={6}>
                                                                    <Typography>
                                                                        {ser.serviceText}
                                                                    </Typography>
                                                                </Grid>

                                                                <Grid item xs={2}>
                                                                    {ser.price + ' руб.'}
                                                                </Grid>

                                                                <Grid item xs={2}>
                                                                    {ser.serviceID}
                                                                </Grid>

                                                                <Grid item xs={2}>
                                                                    <ChangingButtons
                                                                        changingService={props.changingService}
                                                                        changing="service"
                                                                        deleteService={props.deleteService}
                                                                        idTitle={indexService}
                                                                        idSubCategory={indexCategory}
                                                                        idService={indexService}
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        );
                                                    })}
                                                </Grid>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>);
                    }
                })}
            </Grid>
        </Grid>
    );
}