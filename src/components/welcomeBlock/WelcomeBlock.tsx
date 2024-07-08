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
import { routes } from "../../assets/routes/routes";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

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

  const scrollToBlock = (blockId: string) => {
    const block = document.getElementById(blockId);
    if (block) {
      block.scrollIntoView({ behavior: "smooth" });
    }
  };

  const TitleText = {
    color: "#288e81",
    fontSize: isXsScreen ? 30 : 70,
    lineHeight: " 1.2 ",
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

  const ButtonStyle = {
    color: "white",
    backgroundColor: "#288e81",
    borderRadius: "30px",
    fontSize: "14px",
    textTransform: "none",
    padding: "8px 36px",
    display: { xs: "flex", sm: "none", lg: "flex" },
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "#1a665d",
    },
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
              <Button
                sx={ButtonStyle}
                onClick={() => {
                  scrollToBlock("priceBlock");
                }}
              >
                Услуги
              </Button>
              <Button
                sx={ButtonStyle}
                onClick={() => {
                  navigate(routes.goToAppointment('null', 'null'));
                }}
              >
                Записаться на прием
              </Button>
            </div>
          </Grid>
        ) : (
          <>
            <Grid item xs={12} sm={6} md={6}>
              {/* TODO: необходимо добавить отступ для WelcomePhraseButton */}
              <div style={{ marginBottom: "20px" }}>
                <WelcomePhraseButton slogan={data[0]?.slogan || ""} />
              </div>
              <Typography sx={TitleText}>{data[0]?.title || ""}</Typography>
              <Typography sx={SubtitleText}>
                {data[0]?.subtitle || ""}
              </Typography>
              <div style={{ display: "flex", gap: "20px", marginTop: "40px" }}>
                <Button
                  sx={ButtonStyle}
                  onClick={() => {
                    scrollToBlock("priceBlock");
                  }}
                >
                  Услуги
                </Button>
                <Button
                  sx={ButtonStyle}
                  onClick={() => {
                    navigate(routes.goToAppointment('null', 'null'));
                  }}
                >
                  Записаться на прием
                </Button>
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
