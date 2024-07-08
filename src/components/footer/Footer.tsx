import { colors } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../assets/routes/routes";

const Footer: React.FC = () => {
  const linkStyle = { color: "lightgrey", textDecoration: "none" };
  const textStyle = { marginTop: "10px", fontSize: "14px", cursor: "pointer" };
  const headerStyle = {
    fontFamily: "PT-Sans-Bold, sans-serif",
    color: "#525252",
    textTransform: "uppercase",
  };

  const navigate = useNavigate();

  const scrollToBlock = (blockId: string) => {
    const block = document.getElementById(blockId);
    if (block) {
      block.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#171717",
        width: "100%",
        paddingTop: 9,
        paddingBottom: 9,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} md={7}>
            <img
              src="/logos/footer_logo.svg"
              style={{ maxWidth: "180px" }}
              alt="Клиника семейной медицины"
            />
            <Typography
              variant="body2"
              sx={{ color: "#525252", maxWidth: "370px", paddingTop: "20px" }}
            >
              © 2023 Волгоградский государственный медицинский университет - Все
              права защищены
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" sx={headerStyle} gutterBottom>
              Меню
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "lightgrey", cursor: "pointer" }}
              style={textStyle}
              onClick={async () => {
                await navigate(routes.main);
                scrollToBlock("priceBlock");
              }}
            >
              Услуги
            </Typography>
            <Typography
              variant="body1"
              color="lightgrey"
              style={textStyle}
              onClick={async () => {
                await navigate(routes.goToAppointment("null", "null"));
                window.scrollTo(0, 0);
              }}
            >
              Записаться на прием
            </Typography>
            <Typography
              variant="body1"
              color="lightgrey"
              style={textStyle}
              onClick={async () => {
                await navigate(routes.main);
                scrollToBlock("reviewsFromMapBlock");
              }}
            >
              Отзывы
            </Typography>
            <Typography
              variant="body1"
              color="lightgrey"
              style={textStyle}
              onClick={async () => {
                await navigate(routes.main);
                scrollToBlock("aboutUsBlock");
              }}
            >
              О нас
            </Typography>
            <Typography
              variant="body1"
              color="lightgrey"
              style={textStyle}
              onClick={async () => {
                await navigate(routes.main);
                scrollToBlock("ourSpecialists");
              }}
            >
              Наши специалисты
            </Typography>
            <Typography
              variant="body1"
              color="lightgrey"
              style={textStyle}
              onClick={async () => {
                await navigate(routes.main);
                scrollToBlock("mapBlock");
              }}
            >
              Где мы находимся
            </Typography>
            <Typography
              variant="body1"
              color="lightgrey"
              style={textStyle}
              onClick={async () => {
                await navigate(routes.main);
                scrollToBlock("contactsBlock");
              }}
            >
              Контакты
            </Typography>
            <Typography
              variant="body1"
              color="lightgrey"
              style={textStyle}
              onClick={async () => {
                await navigate(routes.docs);
                window.scrollTo(0, 0);
              }}
            >
              Документы
            </Typography>
            <Typography
              variant="body1"
              color="lightgrey"
              style={textStyle}
              onClick={async () => {
                await navigate(routes.privacyPolicy);
                window.scrollTo(0, 0);
              }}
            >
              Политика конфиденциальности
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" sx={headerStyle} gutterBottom>
              Контакты
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingTop: "5px" }}
              style={textStyle}
            >
              <a href="tel:971212" style={linkStyle}>
                (8442) 97-12-12
              </a>
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white" }}
              style={textStyle}
            >
              <a href="tel:+79370971212" style={linkStyle}>
                +7 (937) 097-12-12
              </a>
            </Typography>
            <Typography
              variant="h6"
              sx={[headerStyle, { paddingTop: "15px" }]}
              gutterBottom
            >
              Социальные сети
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: "5px" }}
              style={textStyle}
            >
              <a href="https://vk.com/ksm_voggmu" style={linkStyle}>
                VK
              </a>
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white" }}
              style={textStyle}
            >
              <a href="https://t.me/volggmu_vuz" style={linkStyle}>
                TG
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              sx={{ paddingTop: "20px", fontSize: "12px", color: "#525252" }}
            >
              Информация и цены, представленные на сайте, являются справочными и
              не являются публичной офертой. Лекарственные средства, медицинские
              услуги, в том числе методы лечения, медицинская техника имеют
              противопоказания к их применению и использованию. Существует
              необходимость ознакомления с инструкцией по их применению и
              получения консультации специалистов.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
