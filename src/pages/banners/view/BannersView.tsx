import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { BannersDto, CreateBannersDto } from "../../../api/banners/dto";
import {
  createBanners,
  deleteBanner,
  fetchAllBanners,
} from "../../../api/banners/request";
import { IMAGE_URL } from "../../../utils/constants/url.constants";
import { Box, Button, Typography } from "@mui/material";
import { DialogCreateBanner } from "../../../components/dialogs/DialogCreateBanner";
import theme from "../../../assets/theme/Theme";

const styles = {
  TitleText: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontSize: "24px",
    font: "Roboto",
    fontWeight: "500",
  },
};

export const BannersView = () => {
  const [openDesktopBanner, setOpenDesktopBanner] = useState<boolean>(false);
  const [openMobileBanner, setOpenMobileBanner] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [banners, setBanners] = useState<BannersDto[]>();
  const [value, setValue] = useState({});
  const [newBanner, setNewBanner] = useState<CreateBannersDto>({
    title: "",
    text_content: "",
    subtitle: "",
    img_path: "",
    banner_type: "desktop",
  });

  const [newMobileBanner, setNewMobileBanner] = useState<CreateBannersDto>({
    title: "",
    text_content: "",
    subtitle: "",
    img_path: "",
    banner_type: "mobile",
  });

  const handleClickOpenDesktopBanner = () => {
    setOpenDesktopBanner(true);
  };

  const handleClickOpenMobileBanner = () => {
    setOpenMobileBanner(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setOpenMobileBanner(false);
    setOpenDesktopBanner(false);
  };

  useEffect(() => {
    fetchAllBanners()
      .then((response) => response.json())
      .then((data) => {
        setBanners(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [, value]);

  const handleDeleteBanner: any = async (id: number) => {
    console.log(`Удалил: ${id}`);
    try {
      await deleteBanner(id);
      setValue({});
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateBanner: any = async () => {
    const formData = new FormData();
    formData.append("bodyData", JSON.stringify(newBanner));
    if (selectedImage !== null) {
      formData.append("image", selectedImage);
    } else {
      console.log("Картинка не выбрана!");
      return;
    }

    await createBanners(formData).catch((error) => console.error(error));
    console.log("СОЗДАЛ");
    setValue({});
    handleClose();
  };

  const handleCreateMobileBanner: any = async () => {
    const formData = new FormData();
    formData.append("bodyData", JSON.stringify(newMobileBanner));
    if (selectedImage !== null) {
      formData.append("image", selectedImage);
    } else {
      console.log("Картинка не выбрана!");
      return;
    }

    await createBanners(formData).catch((error) => console.error(error));
    console.log("СОЗДАЛ МОБИЛЬНЫЙ БАННЕР");
    setValue({});
    handleClose();
  };
  return (
    <div style={{ marginBottom: "40px" }}>
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
      <Box sx={{ marginTop: "15px" }}>
        <Typography
          style={styles.TitleText}
          sx={{ marginBottom: 2, spacing: 3 }}
        >
          НАСТРОЙКА БАННЕРОВ
        </Typography>
        <Typography style={styles.TitleText} sx={{ marginY: 2 }}>
          СТАНДАРТНЫЕ БАННЕРЫ
        </Typography>

        <Button variant="contained" onClick={handleClickOpenDesktopBanner}>
          Создать новый баннер
        </Button>

        <DialogCreateBanner
          open={openDesktopBanner}
          handleClickOpen={handleClickOpenDesktopBanner}
          handleClose={handleClose}
          createBanner={newBanner}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          handleCreateBanner={handleCreateBanner}
        />

        <Carousel sx={{ overflow: "visible" }}>
          {banners
            ?.filter((banner) => banner.banner_type === "desktop")
            .map((banner, index) => (
              <div key={index}>
                <img
                  src={IMAGE_URL + banner.img_path}
                  alt={`Slide ${index}`}
                  className="carousel-image"
                />
                <Button
                  onClick={() => handleDeleteBanner(banner.id)}
                  sx={{ marginTop: "25px" }}
                >
                  Удалить баннер
                </Button>
              </div>
            ))}
        </Carousel>
      </Box>
      <Box sx={{ marginTop: "15px" }}>
        <Typography style={styles.TitleText} sx={{ marginTop: "50px" }}>
          МОБИЛЬНЫЕ БАННЕРЫ
        </Typography>

        <Button
          variant="contained"
          onClick={handleClickOpenMobileBanner}
          sx={{ marginTop: "15px" }}
        >
          Создать новый мобильный баннер
        </Button>
        <DialogCreateBanner
          open={openMobileBanner}
          handleClickOpen={handleClickOpenMobileBanner}
          handleClose={handleClose}
          createBanner={newBanner}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          handleCreateBanner={handleCreateMobileBanner}
        />
      </Box>
      <Carousel
        sx={{
          overflow: "visible",
          maxWidth: "250px",
          marginTop: "15px",
        }}
      >
        {banners
          ?.filter((banner) => banner.banner_type === "mobile")
          .map((banner, index) => (
            <div key={index}>
              <img
                src={IMAGE_URL + banner.img_path}
                alt={`Slide ${index}`}
                className="carousel-image"
                style={{ maxWidth: "250px" }}
              />
              <Button
                onClick={() => handleDeleteBanner(banner.id)}
                sx={{ marginTop: "35px" }}
              >
                Удалить баннер
              </Button>
            </div>
          ))}
      </Carousel>
    </div>
  );
};
