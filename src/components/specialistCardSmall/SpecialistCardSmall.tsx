import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

/**
 * Контент карточки специалиста
 * @interface
 *
 * @property {string} id идентификатор
 * @property {string} name ФИО
 * @property {string} post должность
 * @property {string} speciality специальность
 * @property {string} degree степень
 * @property {string} quote цитата
 * @property {string} imageUrl ссылка на фото
 */
interface SpecialistCardContent {
  id: string;
  name: string;
  post: string;
  speciality: string;
  degree: string;
  quote: string;
  imageUrl: string;
}

/**
 * Карточка специалиста small
 *
 * @param {SpecialistCardContent} props - Контент карточки специалиста
 * @param {string} props.id - идентификатор
 * @param {string} props.name - ФИО
 * @param {string} props.post - должность
 * @param {string} props.speciality - специальность
 * @param {string} props.degree - степень
 * @param {string} props.quote - цитата
 * @param {string} props.imageUrl - ссылка на фото
 * @return {React.ReactNode} Отрисованный компонент SpecialistCardSmall
 */
const SpecialistCardSmall: React.FC<SpecialistCardContent> = ({
  id,
  name,
  post,
  speciality,
  degree,
  quote,
  imageUrl,
}) => {
  // Стили имени
  const nameStyle = {
    color: "black",
    fontSize: "20px",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "normal",
    top: 0,
    width: "134px",
  };

  // Стили специальности
  const specialityStyle = {
    color: "#288e81",
    fontSize: "16px",
    fontWeight: 400,
    letterSpacing: 0,
    marginTop: "10px",
  };

  // Стили цитаты
  // TODO: подключить Italic-версию шрифта
  const quoteStyles = {
    color: "#585858",
    fontFamily: "PT-Sans-Italic",
    fontSize: "16px",
    fontWeight: 400,
    letterSpacing: 0,
    marginTop: "2em",
  };

  // Стили кнопки "Записаться"
  const buttonAppointment = {
    border: "2px solid #288e81",
    borderRadius: "5px",
    display: "inline-flex",
    gap: "10px",
    justifyContent: "center",
    padding: "6px 15px",
    color: "#288e81",
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "normal",
    // marginTop: -2,
    // width: "fit-content",
  };

  // Максимальное количество символов цитаты
  const quoteMaxLength = 115;

  return (
    <div>
      <Box sx={{ maxWidth: "900px" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} sx={{ height: "400px" }}>
            <img
              src={imageUrl}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxWidth: "100%",
                borderRadius: "10px",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography sx={nameStyle}>{name}</Typography>
            <Typography sx={specialityStyle}>{speciality}</Typography>
            <Typography>{post}</Typography>
            <Typography sx={quoteStyles}>
              {quote.length > quoteMaxLength
                ? quote.slice(0, quoteMaxLength) + "..."
                : quote}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                flexDirection: { xs: "column", sm: "row" },
                marginTop: "auto",
              }}
            >
              {/* Переход на страницу записи, необходимо передавать id специалиста, чтобы сразу заполнить часть полей формы */}
              <Button href="/appointment" sx={buttonAppointment}>
                Записаться
              </Button>

              {/* Переход на страницу специалиста с подробной информацией. Надо передавать id специалиста */}
              <Button
                component={Link}
                to={`/specialist-details/${id}`} // Здесь передается id специалиста
                sx={buttonAppointment}
              >
                Подробнее
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SpecialistCardSmall;
