import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"; // Импорт иконки "назад"
import { SpecialistCardInterface } from "../../components/interfaces/SpecialistInterface";

/**
 * Вывод данных по конкретному специалисту
 *
 * @return {void}
 */
function SpecialistDataView() {
  const { id } = useParams<{ id: string }>();
  const [specialist, setSpecialist] = useState<SpecialistCardInterface | null>(
    null,
  );

  // Получение текушей темы
  const theme = useTheme();

  // Проверка на мобильный экран
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

  // Стиль заголовка
  const TitleText = {
    color: "#288e81",
    fontSize: isXsScreen ? 22 : 38,
    fontFamily: "Austin, sans-serif",
    textTransform: "uppercase",
    maxWidth: isXsScreen ? 500 : 600,
    textAlign: isXsScreen ? "center" : "left",
    marginBottom: "25px",
  };

  const specialtyText = {
    color: "#288E81",
    // fontFamily: "PT Sans",
    fontSize: "22px",
    fontWeight: 700,
    lineHeight: "normal",
    marginBottom: "10px",
  };

  const PostText = {
    color: "#000",
    //   fontFamily: "PT Sans",
    fontSize: "18px",
    fontWeight: 400,
    maxWidth: isXsScreen ? 500 : 240,
  };

  useEffect(() => {
    // TODO: Получить информацию о специалисте по id с сервера
    const data: SpecialistCardInterface[] = [
      {
        id: "1",
        name: "Лисина Оксана Алексеевна",
        post: "Заместитель главного врача по медицинской части",
        speciality: "Врач-невролог",
        degree: "Доктор медицинских наук",
        quote:
          "“Вперёд к покорению новых высот” - любимая цитата нашего глав. врача, я с ней полностью согласна. Вся наша жизнь игра. А тут еще очень много интересного текста. А тут еще очень много интересного текста. А тут еще очень много интересного текста. А тут еще очень много интересного текста. А тут еще очень много интересного текста. А тут еще очень много интересного текста. А тут еще очень много интересного текста.",
        imageUrl:
          "https://ksm.volgmed.ru/images/tild3363-3830-4232-a135-353739393161__163787-lisina_oa.jpg",
      },
      {
        id: "2",
        name: "Иванов Иван Иванович",
        post: "Заместитель",
        speciality: "Педиатр",
        degree: "М",
        quote: "Цитата",
        imageUrl:
          "https://ksm.volgmed.ru/images/tild3938-3865-4039-b863-633262393264__163799-img_5187.jpg",
      },
      {
        id: "3",
        name: "Иванов Иван Иванович",
        post: "Заместитель",
        speciality: "Педиатр",
        degree: "М",
        quote: "Цитата",
        imageUrl:
          "https://ksm.volgmed.ru/images/tild3363-3830-4232-a135-353739393161__163787-lisina_oa.jpg",
      },
    ];

    const selectedSpecialist = data.find((s) => s.id === id);
    setSpecialist(selectedSpecialist || null);
  }, [id]);

  if (!specialist) {
    // Если специалист не найден, отобразить сообщение об ошибке или редиректить на другую страницу
    return <div>Специалист не найден</div>;
  }

  return (
    <div style={{ marginBottom: "100px" }}>
      <Container>
        <Box
          sx={
            {
              // display: "flex",
              // flexDirection: "row",
            }
          }
        >
          <Link to="/">
            <Button variant="outlined" startIcon={<KeyboardBackspaceIcon />}>
              Назад
            </Button>
          </Link>
          <Typography sx={TitleText}>{specialist.name}</Typography>
        </Box>

        <Grid container spacing={5}>
          {/* Фото специалиста */}
          <Grid item xs={12} md={6} sx={{ height: "600px", width: "300px" }}>
            <img
              src={specialist.imageUrl}
              alt={specialist.post + " " + specialist.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxWidth: "100%",
                borderRadius: "10px",
              }}
            />
          </Grid>
          {/* Вся информация по специалисту */}
          <Grid item xs={12} md={6}>
            <Box sx={{ marginBottom: "30px" }}>
              <Typography sx={specialtyText}>
                {specialist.speciality}
              </Typography>
              <Typography sx={PostText}>{specialist.post}</Typography>
            </Box>
            <Typography
              sx={{
                ...PostText,
                marginBottom: {
                  xs: "30px",
                  md: "50px",
                },
              }}
            >
              {specialist.degree}
            </Typography>
            <Typography>{specialist.quote}</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SpecialistDataView;
