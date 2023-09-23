import { Button, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "./../utils/SpecialistsCss.css"
import theme from "../../../assets/theme/Theme";
import React, { useEffect, useState } from "react";
import { ISpecialistsView } from "../model/SpecialistsModel";
import { IMAGE_URL } from "../../../utils/constants/url.constants";
import { DialogCreateSpecialists } from "../../../components/dialogs/DialogCreateSpecialist";
import { DialogUpdateSpecialists } from "../../../components/dialogs/DialogUpdateSpecialists";
import { SpecialistDto, UpdateSpecialistDto } from "../../../api/specialists/dto";
import { deleteSpecialistById, updateDataSpecialist, updatePhotoSpecialist } from "../../../api/specialists/request";

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
                    <Button variant="contained" onClick={props.handleClickCreateOpen}>
                        Создать нового специалиста
                    </Button>
                    <DialogCreateSpecialists
                        open={props.createOpen}
                        handleClickOpen={props.handleClickCreateOpen}
                        handleClose={props.handleCreateClose}
                        createSpecialist={props.createSpecialist}
                        handleChangeSpecialistForm={props.handleChangeNewSpecialistForm}
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
                        <SpecialistItem
                            index={index}
                            doctor={doctor}
                            selectedImage={props.selectedImage}
                            setSelectedImage={props.setSelectedImage}
                            setValue={props.setValue}
                        />
                    ))}
                </Slider>
            </Grid>
        </div>
    );
}

interface ISpecialistItem {
    index: number
    doctor: SpecialistDto,
    selectedImage: File | null,
    setSelectedImage: Function,
    setValue: Function
}

const SpecialistItem: React.FC<ISpecialistItem> = (props) => {
    const [open, setOpen] = useState<boolean>(false);
    const [updateSpecialist, setUpdateSpecialist] = useState<UpdateSpecialistDto>({
        name: props.doctor.name,
        post: props.doctor.post,
        speciality: props.doctor.speciality,
        degree: props.doctor.degree
    });

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        props.setSelectedImage(null);
        setOpen(false);
    }

    const handleChangeUpdateSpecialistForm = (event: any, type: string) => {
        if (type === 'name') {
            setUpdateSpecialist({ ...updateSpecialist, name: event.target.value });
        } else if (type === 'post') {
            setUpdateSpecialist({ ...updateSpecialist, post: event.target.value });
        } else if (type === 'speciality') {
            setUpdateSpecialist({ ...updateSpecialist, speciality: event.target.value });
        } else if (type === 'degree') {
            setUpdateSpecialist({ ...updateSpecialist, degree: event.target.value });
        } else {
            console.error('Что-то пошло не так с сохранением данных о специалисте');
        }
    }

    const handleUpdateSpecialist = async () => {
        await updateDataSpecialist(props.doctor.id, updateSpecialist);
        if (props.selectedImage !== null) {
            const formData = new FormData;
            formData.append('photo', props.selectedImage);
            await updatePhotoSpecialist(props.doctor.id, formData);
        } else {
            console.error('Фотогрфаии нет!');
        }
        props.setValue({});
        handleClose();
    }

    const handleDeleteSpecialist = async () => {
        try {
            await deleteSpecialistById(props.doctor.id);
            props.setValue({});
        } catch (error) {
            console.error(error);
        }
    }

    return (<div className="card">
        <div
            className="card-item"
            key={props.index}
        >
            <div className="card-top">
                <img src={IMAGE_URL + props.doctor.photo_path} alt={props.doctor.name} width={260} height={346} />
            </div>
            <div className="card-bottom">
                <Typography sx={{ fontFamily: "PT-Sans-Bold" }}>
                    {props.doctor.name}
                </Typography>
                <Typography variant="subtitle1">{props.doctor.speciality}</Typography>
                <Typography sx={{ fontFamily: "PT-Sans-Bold" }}>
                    {props.doctor.post}
                </Typography>
                <Typography sx={{ color: "#288E81" }}>
                    {props.doctor.degree}
                </Typography>
                <Button
                    onClick={handleClickOpen}
                >
                    Редактировать
                </Button>
                <DialogUpdateSpecialists
                    open={open}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                    updateSpecialist={updateSpecialist}
                    handleChangeSpecialistForm={handleChangeUpdateSpecialistForm}
                    selectedImage={props.selectedImage}
                    setSelectedImage={props.setSelectedImage}
                    handleUpdateSpecialist={handleUpdateSpecialist}
                    photo_path={props.doctor.photo_path}
                    id={props.doctor.id}
                />
                <Button
                    onClick={handleDeleteSpecialist}
                >
                    Удалить
                </Button>
            </div>
        </div>
    </div>);
}