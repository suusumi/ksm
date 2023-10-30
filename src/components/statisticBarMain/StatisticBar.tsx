import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import gsap from "gsap";
import { fetchAllInfogrpaphics } from "../../api/infographics/request";

/**
 * Данные блока с инфографикой.
 * @interface
 *
 * @property {string} value Заголовок.
 * @property {string} description Описание.
 */
interface StatisticItem {
  value: string;
  description: string;
}

/**
 * Компонент, отображающий блок с инфографикой.
 *
 * @return {React.ReactNode} Отрисованный компонент c инфографикой.
 */
const StatisticBar: React.FC = () => {
  const [data, setData] = useState<StatisticItem[]>([]);
  const titleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const descriptionRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    fetchAllInfogrpaphics()
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Устанавливаем данные, полученные с сервера
      })
      .catch((error) => console.error("Ошибка при получении данных", error));

    // Здесь больше не нужны фиктивные данные
  }, []);

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

  const TitleText = {
    color: "#288e81",
    textDecoration: "none",
    fontSize: isXsScreen ? 35 : 65,
    fontFamily: "AustinMedium, sans-serif",
    display: "flex",
    textAlign: isXsScreen ? "center" : "left",
  };

  const StandartText = {
    color: "black",
    textDecoration: "none",
    fontSize: isXsScreen ? 16 : 22,
    fontFamily: "PT-Sans, sans-serif",
    maxWidth: "250px",
    display: "flex",
    textAlign: isXsScreen ? "center" : "left",
  };

  return (
    <div style={{ padding: isXsScreen ? "40px 0px" : "10px 0px" }}>
      <Grid container spacing={5}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={4}
            md={4}
            style={{ marginBottom: "30px" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: isXsScreen ? "center" : "flex-start",
              }}
            >
              <Typography
                ref={(el) => (titleRefs.current[index] = el as HTMLSpanElement)}
                sx={TitleText}
              >
                {item.value}
              </Typography>
              <Typography
                ref={(el) =>
                  (descriptionRefs.current[index] = el as HTMLSpanElement)
                }
                sx={StandartText}
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StatisticBar;
