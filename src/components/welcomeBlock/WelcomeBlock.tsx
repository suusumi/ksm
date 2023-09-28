import React, { useState, useEffect } from "react";
import WelcomePhraseButton from "../welcomePhraseButton/WelcomePhraseButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import zubWelcomeBlockMobile from "../../assets/content/main/welcomeBlock/zub_welcomeBlock_mobile.png";
import zubPngVectorMobile from "../../assets/content/main/welcomeBlock/zub_png_vector_mobile.png";
import zubWelcomeBlock2 from "../../assets/content/main/welcomeBlock/zub_welcomeBlock2.png";
import PrimaryButton from "../primaryButton/PrimaryButton";

/**
 * Данные по блоку приветствия
 * @interface
 *
 * @property {string} title Заголовок
 * @property {string} subtitle Подзаголовок
 * @property {string} slogan Слоган
 */
interface WelcomeBlockData {
  title: string;
  subtitle: string;
  slogan: string;
}

/**
 * Компонент отображающий приветственный блок
 *
 * @return {ReactElement} Отрисованный компонент WelcomeBlock
 */
const WelcomeBlock: React.FC = () => {
  const [data, setData] = useState<WelcomeBlockData[]>([]);

  useEffect(() => {
    const welcomeBlockData: WelcomeBlockData[] = [
      {
        title: "Искусство быть врачом",
        subtitle:
          "Заботимся о вашем здоровье. Индивидуальный подход к каждому пациенту",
        slogan: "Здоровье превыше всего!",
      },
    ];

    setData(welcomeBlockData);
  }, []);

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

  const TitleText = {
    color: "#288e81",
    fontSize: isXsScreen ? 30 : 70,
    fontFamily: "Austin, sans-serif",
    textTransform: "uppercase",
    maxWidth: isXsScreen ? 240 : 500,
    textAlign: isXsScreen ? "center" : "left",
  };

  const SubtitleText = {
    fontSize: isXsScreen ? 16 : 22,
    maxWidth: isXsScreen ? 300 : 500,
    textAlign: isXsScreen ? "center" : "left",
    display: "flex",
  };
  return (
    <div>
      <Grid container spacing={5}>
        {isXsScreen ? (
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "50%",
                position: "absolute",
                top: "24%",
                left: "54%",
                zIndex: 1,
              }}
              src={zubPngVectorMobile}
            ></Box>
            <Box
              component="img"
              sx={{ width: "80%" }}
              alt="Зуб Андрей Владимирович"
              src={zubWelcomeBlockMobile}
            ></Box>
            <Typography sx={{ ...TitleText, zIndex: 2 }}>
              {data[0]?.title || ""}
            </Typography>
            <Typography sx={SubtitleText}>{data[0]?.subtitle || ""}</Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginTop: "40px",
              }}
            >
              <PrimaryButton buttonText="Услуги" />
              <PrimaryButton buttonText="Записаться на прием" />
            </div>
          </Grid>
        ) : (
          <>
            <Grid item xs={12} sm={6} md={6}>
              <WelcomePhraseButton slogan={data[0]?.slogan || ""} />
              <Typography sx={TitleText}>{data[0]?.title || ""}</Typography>
              <Typography sx={SubtitleText}>
                {data[0]?.subtitle || ""}
              </Typography>
              <div style={{ display: "flex", gap: "20px", marginTop: "40px" }}>
                <PrimaryButton buttonText="Услуги" />
                <PrimaryButton buttonText="Записаться на прием" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                component="img"
                sx={{ width: "100%" }}
                alt="Зуб Андрей Владимирович"
                src={zubWelcomeBlock2}
              ></Box>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default WelcomeBlock;
