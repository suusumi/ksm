import React from "react";
import { IServicesView } from "../model/ServicesModel";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
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

                    <Grid item paddingTop={'14px'}>
                        <Button
                            variant="outlined"
                            size='large'
                            onClick={(event) => { props.handleCreate(
                                event,
                                -1,
                                -1,
                                -1,
                                'title'
                                ); }}
                        >
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={8}>
                {props.services.map((service, indexService) => {
                    if (service.id === props.idButtonSelection) {
                        return (<Grid container direction={'column'}>
                            {/* TODO: Сделать все в одном гриде и менять только Typography на InputBox */}
                            <Grid item xs={2} sx={{ display: 'inline-flex' }}>
                                {props.isChanging !== 'title' &&
                                    <Typography style={styles.textHeader}>
                                        {service.categoryTitle}
                                    </Typography>
                                }
                                {props.isChanging === 'title' &&
                                    <TextField
                                        id="title"
                                        fullWidth
                                        variant="outlined"
                                        value={service.categoryTitle}
                                        onChange={(event) => props.handleChangeTitle(event, indexService)}
                                    />
                                }

                                <ChangingButtons
                                    changing="title"
                                    changingService={props.changingService}
                                    deleteService={props.deleteService}
                                    idTitle={indexService}
                                    idSubCategory={-1}
                                    idService={-1}
                                />

                                <Button
                                    variant='outlined'
                                    onClick={(event) => { props.handleCreate(
                                        event,
                                        indexService,
                                        -1,
                                        -1,
                                        'category'
                                    ); }}
                                >
                                    Создать подгруппу
                                </Button>
                            </Grid>

                            <Grid item xs={10}>
                                <Grid container direction={'column'} spacing={2} margin={0} padding={0}>
                                    {service.subcategories.map((category, indexCategory) => {
                                        return (
                                            <Grid item>
                                                <Grid container direction={'row'} justifyContent={'space-between'}>
                                                    <Grid item sx={{ display: 'inline-flex' }}>
                                                        {props.isChanging !== 'category' + indexCategory &&
                                                            <Typography style={styles.textCategoryTitle}>
                                                                {category.subcategoryTitle}
                                                            </Typography>
                                                        }

                                                        {props.isChanging === 'category' + indexCategory &&
                                                            <TextField
                                                                id="category"
                                                                variant="outlined"
                                                                fullWidth
                                                                value={category.subcategoryTitle}
                                                                onChange={(event) => props.handleChangeCategory(event, indexService, indexCategory)}
                                                            />
                                                        }

                                                        <ChangingButtons
                                                            changing={"category" + indexCategory}
                                                            changingService={props.changingService}
                                                            deleteService={props.deleteService}
                                                            idTitle={indexService}
                                                            idSubCategory={indexCategory}
                                                            idService={-1}
                                                        />

                                                        <Button
                                                            variant='outlined'
                                                            onClick={(event) => { props.handleCreate(
                                                                event,
                                                                indexService,
                                                                indexCategory,
                                                                -1,
                                                                'service'
                                                            ); }}
                                                        >
                                                            Создать услугу 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                                <Divider />

                                                <Grid container direction={'column'} paddingTop={2} margin={0} spacing={3}>
                                                    {category.services.map((ser, indexSer) => {
                                                        return (<Grid item>
                                                            <Grid container direction={'row'} spacing={5} padding={0} margin={0}>
                                                                {props.isChanging !== 'service' + indexCategory + indexSer && <>
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
                                                                </>}

                                                                {props.isChanging === 'service' + indexCategory + indexSer && <>
                                                                    <Grid item xs={6}>
                                                                        <TextField
                                                                            id="serviceText"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            value={ser.serviceText}
                                                                            onChange={(event) => props.handleChangeService(
                                                                                event,
                                                                                indexService,
                                                                                indexCategory,
                                                                                indexSer,
                                                                                "title")}
                                                                        />
                                                                    </Grid>

                                                                    <Grid item xs={2}>
                                                                        <TextField
                                                                            id="servicePrice"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            value={ser.price}
                                                                            onChange={(event) => props.handleChangeService(
                                                                                event,
                                                                                indexService,
                                                                                indexCategory,
                                                                                indexSer,
                                                                                "price")}
                                                                        />
                                                                    </Grid>

                                                                    <Grid item xs={2}>
                                                                        <TextField
                                                                            id="serviceID"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            value={ser.serviceID}
                                                                            onChange={(event) => props.handleChangeService(
                                                                                event,
                                                                                indexService,
                                                                                indexCategory,
                                                                                indexSer,
                                                                                "ID")}
                                                                        />
                                                                    </Grid>
                                                                </>}

                                                                <Grid item xs={2}>
                                                                    <ChangingButtons
                                                                        changingService={props.changingService}
                                                                        changing={"service" + indexCategory + indexSer}
                                                                        deleteService={props.deleteService}
                                                                        idTitle={indexService}
                                                                        idSubCategory={indexCategory}
                                                                        idService={indexSer}
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