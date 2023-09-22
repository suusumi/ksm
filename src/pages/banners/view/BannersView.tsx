import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { BannersDto, CreateBannersDto } from '../../../api/banners/dto';
import { createBanners, deleteBanner, fetchAllBanners } from '../../../api/banners/request';
import { IMAGE_URL } from '../../../utils/constants/url.constants';
import { Button } from '@mui/material';
import { DialogCreateBanner } from '../../../components/dialogs/DialogCreateBanner';

export const BannersView = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [banners, setBanners] = useState<BannersDto[]>();
    const [value, setValue] = useState({});
    const [newBanner, setNewBanner] = useState<CreateBannersDto>({
        title: '',
        text_content: '',
        subtitle: '',
        img_path: ''
    })

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setSelectedImage(null);
        setOpen(false);
    }

    useEffect(() => {
        fetchAllBanners()
            .then((response) => response.json())
            .then((data) => {
                setBanners(data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [, value])

    const handleDeleteBanner: any = async (id: number) => {
        console.log(`Удалил: ${id}`);
        try {
            await deleteBanner(id);
            setValue({});
        } catch (error) {
            console.error(error);
        }
    }

    const handleCreateBanner: any = async () => {
        const formData = new FormData;
        formData.append('bodyData', JSON.stringify(newBanner));
        if (selectedImage !== null) {
            formData.append('image', selectedImage);
        } else { 
            console.log("Картинка не выбрана!");
            return;
        }

        await createBanners(formData)
        .catch((error) => console.error(error));
        console.log('СОЗДАЛ');
        setValue({});
        handleClose();
    }

    return (
        <div>
            <style>
                {`
          /* Стили для изображений */
          .carousel-image {
            width: 100%; /* Ширина изображения на всех экранах 
            height: auto; /* Автоматическая высота, чтобы сохранить пропорции 
          }

          /* Стили для десктопных экранов (пример) */
          @media (min-width: 1280px) {
            .carousel-image {
              max-width: 100%; /* Ограничение ширины на десктопных экранах 
            }
          }
        `}
            </style>
            <Button
                variant='contained'
                onClick={handleClickOpen}
            >
                Создать новый баннер
            </Button>
            <DialogCreateBanner 
                open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                createBanner={newBanner}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                handleCreateBanner={handleCreateBanner}
            />
            <Carousel sx={{ overflow: 'visible' }}>
                {banners?.map((banner, index) => (
                    <div key={index}>
                        <img src={IMAGE_URL + banner.img_path} alt={`Slide ${index}`} className="carousel-image" />
                        <Button
                            onClick={() => handleDeleteBanner(banner.id)}
                        >
                            Удалить баннер
                        </Button>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}