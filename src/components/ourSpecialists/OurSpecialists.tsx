import React, { useState, useEffect } from "react";
// import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Grid, Box, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurSpecialists.css";

/**
 * Идентификатор для корректной навигации в шапке.
 * @interface
 *
 * @property {string} id Идентификатор блока.
 */
interface OurSpecialistsId {
  id: string;
}

/**
 * Данные по специалистам
 * @interface
 *
 * @property {string} name ФИО
 * @property {string} post должность
 * @property {string} speciality специальность
 * @property {string} degree степень
 * @property {string} imageUrl ссылка на фото
 */
interface OurSpecialistsProps {
  name: string;
  post: string;
  speciality: string;
  degree: string;
  imageUrl: string;
}

/**
 * Компонент, отображающий блок специалистов
 *
 * @param {OurSpecialistsId} id - Идентификатор для корректной навигации в шапке.
 * @return {ReactElement} Отрисованный компонент OurSpecialists
 */
const OurSpecialists: React.FC<OurSpecialistsId> = ({ id }) => {
  const [data, setData] = useState<OurSpecialistsProps[]>([]);

  useEffect(() => {
    const OurSpecialistsData: OurSpecialistsProps[] = [
      {
        name: "Лисина Оксана Алексеевна",
        post: "Зам. врача",
        speciality: "Невролог",
        degree: "ВОЛГГМУ",
        imageUrl:
          "https://i.ibb.co/JtVms49/tild3332-6363-4764-a465-376264616662-163780-tarasova-nv.jpg",
      },
      {
        name: "Паскалев Паскаль Паскальевич",
        post: "",
        speciality: "Педро",
        degree: "ВОЛГГМУ2",
        imageUrl:
          "https://i.ibb.co/T8M0wHG/tild3234-3063-4534-b735-306464383135-163812-malanin-da.jpg",
      },
      {
        name: "Иванов иван иваныч",
        post: "Зам. врача 2",
        speciality: "Невролог вроде",
        degree: "ВОЛГГМУ2",
        imageUrl:
          "https://i.ibb.co/JtVms49/tild3332-6363-4764-a465-376264616662-163780-tarasova-nv.jpg",
      },
      {
        name: "Иванов иван иваныч",
        post: "Зам. врача 2",
        speciality: "Невролог вроде",
        degree: "ВОЛГГМУ2",
        imageUrl:
          "https://i.ibb.co/JtVms49/tild3332-6363-4764-a465-376264616662-163780-tarasova-nv.jpg",
      },
      {
        name: "Иванов иван иваныч",
        post: "Зам. врача 2",
        speciality: "Невролог вроде",
        degree: "ВОЛГГМУ2",
        imageUrl:
          "https://i.ibb.co/JtVms49/tild3332-6363-4764-a465-376264616662-163780-tarasova-nv.jpg",
      },
      {
        name: "Иванов иван иваныч",
        post: "Зам. врача 2",
        speciality: "Невролог вроде",
        degree: "ВОЛГГМУ2",
        imageUrl:
          "https://i.ibb.co/JtVms49/tild3332-6363-4764-a465-376264616662-163780-tarasova-nv.jpg",
      },
      // Добавьте остальные данные о врачах
    ];
    setData(OurSpecialistsData);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
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

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

  const TitleText = {
    color: "#288e81",
    fontSize: isXsScreen ? 22 : 38,
    fontFamily: "Austin, sans-serif",
    textTransform: "uppercase",
    maxWidth: isXsScreen ? 500 : 500,
    textAlign: isXsScreen ? "center" : "left",
    marginBottom: "25px",
  };

  return (
    <div id={id}>
      <Box sx={{ padding: "40px 0px" }}>
        <Typography sx={TitleText}>Наши специалисты</Typography>
        <Slider {...settings}>
          {data.map((doctor, index) => (
            <div className="card">
              <div
                className="card-item"
                style={{ maxWidth: "260px" }}
                key={index}
              >
                <div className="card-top">
                  <img
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    style={{ maxWidth: "345px", maxHeight: "320px" }}
                  />
                </div>
                <div className="card-bottom">
                  <Typography sx={{ fontFamily: "PT-Sans-Bold" }}>
                    {doctor.name}
                  </Typography>
                  <Typography variant="subtitle1">
                    {doctor.speciality}
                  </Typography>
                  <Typography sx={{ fontFamily: "PT-Sans-Bold" }}>
                    {doctor.post}
                  </Typography>
                  <Typography sx={{ color: "#288E81" }}>
                    {doctor.degree}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Box>
    </div>
  );
};

export default OurSpecialists;
