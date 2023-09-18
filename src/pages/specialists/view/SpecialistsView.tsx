import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "./../utils/SpecialistsCss.css"
import theme from "../../../assets/theme/Theme";
import React from "react";
import { ISpecialistsView } from "../model/SpecialistsModel";
import { IMAGE_URL } from "../../../utils/constants/url.constants";
import { DialogCreateSpecialists } from "../../../components/dialogs/DialogCreateSpecialist";

const styles = {
    TitleText: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontSize: '24px',
        font: 'Roboto',
        fontWeight: '500',
    },
    EmptySpecialisisTitle: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontSize: '40px',
        font: 'Roboto',
        fontWeight: '500',
    }
}

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export const SpecialistsView: React.FC<ISpecialistsView> = (props) => {
    return (
        <div>
            <Grid container marginY={2} spacing={3}>
                <Grid item>
                    <Typography style={styles.TitleText}>НАСТРОЙКА СПЕЦИАЛИСТОВ</Typography>
                </Grid>

                <Grid item>
                    <Button variant="contained" onClick={props.handleClickOpen}>
                        Создать нового специалиста
                    </Button>
                    <DialogCreateSpecialists
                        open={props.open}
                        handleClickOpen={props.handleClickOpen}
                        handleClose={props.handleClose}
                        createSpecialist={props.createSpecialist}
                        handleChangeSpecialistForm={props.handleChangeSpecialistForm}
                        selectedImage={props.selectedImage}
                        setSelectedImage={props.setSelectedImage}
                        handleCreateSpecialist={props.handleCreateSpecialist}
                    />
                </Grid>
            </Grid>

            <Grid item>
                <Typography style={styles.TitleText}>КАК БУДУТ ВЫГЛЯДЕТЬ СПЕЦИАЛИСТЫ</Typography>
                <Slider {...settings}>
                    {props.specialists?.map((doctor, index) => (
                        <div className="card">
                            <div
                                className="card-item"
                                // style={{ maxWidth: "260px", maxHeight: '346px' }}
                                key={index}
                            >
                                <div className="card-top">
                                    <img src={IMAGE_URL + doctor.photo_path} alt={doctor.name} width={260} height={346} />
                                </div>
                                <div className="card-bottom">
                                    <Typography sx={{ fontFamily: "PT-Sans-Bold" }}>
                                        {doctor.name}
                                    </Typography>
                                    <Typography variant="subtitle1">{doctor.speciality}</Typography>
                                    <Typography sx={{ fontFamily: "PT-Sans-Bold" }}>
                                        {doctor.post}
                                    </Typography>
                                    <Typography sx={{ color: "#288E81" }}>
                                        {doctor.degree}
                                    </Typography>
                                    <Button
                                        onClick={props.handleClickOpen}
                                    >
                                        Редактировать
                                    </Button>
                                    <Button>
                                        Удалить
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Grid>
        </div>
    );
}