import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import SpecialistCardSmall from "../../../components/specialistCardSmall/SpecialistCardSmall";
import { SpecialistCardInterface } from "../../../components/interfaces/SpecialistInterface";
/**
 * Вид компонента всех специалистов
 *
 * @return {void}
 */
function AllSpecialistsView() {
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
    maxWidth: isXsScreen ? 500 : 500,
    textAlign: isXsScreen ? "center" : "left",
    marginBottom: "25px",
  };

  // Состояния для специалистов
  const [specialists, setSpecialists] = useState<SpecialistCardInterface[]>([]);

  // Состояния для фильтрации
  const [filterSpecialty, setFilterSpecialty] = useState("");
  const [filterName, setFilterName] = useState("");
  const [filteredSpecialists, setFilteredSpecialists] =
    useState<SpecialistCardInterface[]>(specialists);

  useEffect(() => {
    const data: SpecialistCardInterface[] = [
      {
        id: "1",
        name: "Лисина Оксана Алексеевна",
        post: "Заместитель главного врача по медицинской части",
        speciality: "Врач-невролог",
        degree: "М",
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

    // Устанавливаем данные в состояние
    setSpecialists(data);
  }, []);

  useEffect(() => {
    // Фильтрация специалистов
    const filtered = specialists.filter((specialist) => {
      const nameMatch = specialist.name
        .toLowerCase()
        .includes(filterName.toLowerCase());
      const specialtyMatch = specialist.speciality
        .toLowerCase()
        .includes(filterSpecialty.toLowerCase());
      return nameMatch && specialtyMatch;
    });

    // Устанавливаем отфильтрованных специалистов в состояние
    setFilteredSpecialists(filtered);
  }, [filterSpecialty, filterName, specialists]);

  return (
    <div style={{ marginBottom: "100px" }}>
      <Container>
        {/* Заголовок */}
        <Box>
          <Typography sx={TitleText}>Специалисты клиники</Typography>
        </Box>

        {/* Фильтрация */}
        <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
          <Grid item xs={12} md={2}>
            <TextField
              label="ФИО"
              variant="outlined"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              label="Специальность"
              variant="outlined"
              value={filterSpecialty}
              onChange={(e) => setFilterSpecialty(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Карточки специалистов или сообщение об ошибке */}
        {filteredSpecialists.length === 0 ? (
          <Typography variant="h6" sx={{ color: "#FF0000" }}>
            Врачи не найдены, проверьте правильность ввода
          </Typography>
        ) : (
          <Grid container spacing={5}>
            {filteredSpecialists.map((specialist) => (
              <Grid item xs={12} md={6} key={specialist.id}>
                <SpecialistCardSmall
                  id={specialist.id}
                  name={specialist.name}
                  post={specialist.post}
                  speciality={specialist.speciality}
                  degree={specialist.degree}
                  quote={specialist.quote}
                  imageUrl={specialist.imageUrl}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default AllSpecialistsView;
