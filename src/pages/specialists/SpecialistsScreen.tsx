import React, { useEffect, useState } from "react";
import { SpecialistsView } from "./view/SpecialistsView";
import { CreateSpecialistDto, SpecialistDto } from "../../api/specialists/dto";
import { createSpecialist, fetchAllSpecialists } from "../../api/specialists/request";
import { error } from "console";

export const SpecialistsScreen = () => {
    const [specialists, setSpecialists] = useState<SpecialistDto[]>();
    const [newSpecialist, setNewSpecialist] = useState<CreateSpecialistDto>({
        name: '',
        post: '',
        speciality: '',
        degree: ''
    });
    const [value, setValue] = useState({});
    const [open, setOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setSelectedImage(null);
      setNewSpecialist({
        name: '',
        post: '',
        speciality: '',
        degree: ''
      })
    };

    const handleChangeSpecialistForm = (event: any, type: string) => {
        if (type === 'name') {
            setNewSpecialist({...newSpecialist, name: event.target.value});
        } else if (type === 'post') {
            setNewSpecialist({...newSpecialist, post: event.target.value});
        } else if (type === 'speciality') {
            setNewSpecialist({...newSpecialist, speciality: event.target.value});
        } else if (type === 'degree') {
            setNewSpecialist({...newSpecialist, degree: event.target.value});
        } else {
            console.error('Что-то пошло не так с сохранением данных о специалисте');
        }
    }

    const handleCreateSpecialist = () => {
        const formData = new FormData;
        formData.append('bodyData', JSON.stringify(newSpecialist));
        if (selectedImage !== null) {
            formData.append('photo', selectedImage);
        } else {
            console.error('Фотографии нет!');
        }

        createSpecialist(formData);
        setValue({});
        handleClose();
    }

    useEffect(() => {
        fetchAllSpecialists()
            .then((response) => { return response.json() })
            .then((data) => {
                setSpecialists(data);
            })
            .catch((error) =>
                console.error(error)
            );
    }, [, value]);

    return (
        <SpecialistsView
            specialists={specialists}
            open={open}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            createSpecialist={newSpecialist}
            handleChangeSpecialistForm={handleChangeSpecialistForm}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            handleCreateSpecialist={handleCreateSpecialist}
        />
    );
}