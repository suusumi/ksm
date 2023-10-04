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
  name: string; // ФИО
  post: string;
  speciality: string;
  degree: string;
  quote: string;
  imageUrl: string;
}

/**
 * Вывод данных по конкретному специалисту
 *
 * @return {void}
 */
function SpecialistDataView() {
  const { id } = useParams<{ id: string }>();
  const [specialist, setSpecialist] = useState<SpecialistCardContent | null>(
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

  useEffect(() => {
    // TODO: Получить информацию о специалисте по id с сервера
    const data: SpecialistCardContent[] = [
      {
        id: "1",
        name: "Лисина Оксана Алексеевна",
        post: "Заместитель главного врача по медицинской части",
        speciality: "Врач-невролог",
        degree: "М",
        quote:
          "“Вперёд к покорению новых высот” - любимая цитата нашего глав. врача, я с ней полностью согласна. Вся наша жизнь игра, а мы в ней пешки.",
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
    <div>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
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
            <Box>
              <Typography>{specialist.speciality}</Typography>
              <Typography>{specialist.post}</Typography>
            </Box>
            <Typography>{specialist.degree}</Typography>
            <Typography>{specialist.quote}</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SpecialistDataView;
