import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BannersDto } from "../../api/banners/dto";
import { fetchAllBanners } from "../../api/banners/request";
import { IMAGE_URL } from "../../utils/constants/url.constants";
import theme from "../../assets/theme/Theme";

const CarouselBlock: React.FC = () => {
  const [data, setData] = useState<BannersDto[]>([]);
  const [value, setValue] = useState({});

  useEffect(() => {
    fetchAllBanners()
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Устанавливаем данные, полученные с сервера
      })
      .catch((error) => console.error("Ошибка при получении данных", error));
  }, [, value]);

  // Проверяем размер экрана
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up("lg")); // Десктопный размер экрана, возможно надо поменять на md

  return (
    <div>
      <style>
        {`
          /* Стили для изображений */
          .carousel-image {
            width: 100%; /* Ширина изображения на всех экранах */
            height: auto; /* Автоматическая высота, чтобы сохранить пропорции */
          }

          /* Стили для десктопных экранов (пример) */
          @media (min-width: 1280px) {
            .carousel-image {
              max-width: 100%; /* Ограничение ширины на десктопных экранах */
            }
          }
        `}
      </style>
      {isXsScreen ? (
        <Carousel>
          {data
            .filter((banner) => banner.banner_type === "mobile")
            .map((banner, index) => (
              <div key={index}>
                <img
                  src={IMAGE_URL + banner.img_path}
                  alt={banner.title}
                  className="carousel-image"
                />
              </div>
            ))}
        </Carousel>
      ) : (
        <Carousel>
          {data
            .filter((banner) => banner.banner_type === "desktop")
            .map((banner, index) => (
              <div key={index}>
                <img
                  src={IMAGE_URL + banner.img_path}
                  alt={banner.title}
                  className="carousel-image"
                />
              </div>
            ))}
        </Carousel>
      )}
    </div>
  );
};

export default CarouselBlock;
