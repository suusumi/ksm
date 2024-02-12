import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

const links = [
  {
    title: "Правила предоставления платных медицинских услуг",
    link: "https://www.volgmed.ru/uploads/files/2022-11/161900-aeoomocsunulvmby35uvvoryyuuubsyr.pdf",
  },
  // {
  //   title: "Положение о Клинике семейной медицины",
  //   link: "https://www.volgmed.ru/uploads/files/2022-11/161902-ksm_polozhenie_o_kliniki.pdf",
  // },
  {
    title: "Анкета Минздрава",
    link: "https://minzdrav.gov.ru/open/supervision/format/nezavisimaya-sistema-otsenki-kachestva-okazaniya-uslug-meditsinskimi-organizatsiyami/nezavisimaya-otsenka-kachestva-okazaniya-uslug-meditsinskimi-organizatsiyami",
  },
  {
    title: "Лицензия",
    link: "https://www.volgmed.ru/uploads/files/2023-7/176789-litsenziya_klinika_volggmu_l041_00110_34_00368034.pdf",
  },
  // {
  //   title: "Сведения о сотрудниках",
  //   link: "https://www.volgmed.ru/uploads/files/2023-9/185147-svedeniya_o_sotrudnikakh_sentyabr_2023.pdf",
  // },
  {
    title: "Внесение изменений в реестр лицензий",
    link: "https://www.volgmed.ru/uploads/files/2023-7/177857-vnesenie_izmeneniy_v_reestr_litsenziy_iyul_2023.pdf",
  },
  // {
  //   title: "Информированные добровольные согласия",
  //   link: "https://www.volgmed.ru/uploads/files/2022-11/161669-158350_informirovannye_soglasiya.pdf",
  // },
  // {
  //   title: "Договор на оказание платных медицинских услуг",
  //   link: "https://www.volgmed.ru/uploads/files/2023-8/181264-dogovor_okazaniya_med_uslugi_s_01_09_2023.pdf",
  // },
  {
    title: "Календарь профилактических прививок",
    link: "https://www.volgmed.ru/uploads/files/2022-9/158343-prmz_1122_06122021.pdf",
  },
  // {
  //   title: "Прейскурант цен на платные медицинские услуги",
  //   link: "https://www.volgmed.ru/uploads/files/2023-9/184591-prays_na_15_09_2023.pdf",
  // },
  // {
  //   title: "Подразделение, ул. КИМ, 20",
  //   link: "https://www.volgmed.ru/uploads/files/2022-11/161729-kim_20_na_08noyabrya_22.pdf",
  // },
  {
    title: "Файловое хранилище",
    link: "https://www.volgmed.ru/medicine/clinic/faylovyy-menedzher/",
  },
];

function DocsView() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const styles = {
    titleBlock: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
      maxWidth: "640px",
      padding: "0",
      marginBottom: isMdScreen ? "45px" : "90px",
      paddingTop: isSmScreen ? "45px" : "0px",
    },
    titleText: {
      marginBottom: isMdScreen ? "20px" : "40px",
      fontSize: isSmScreen ? "30px" : isLgScreen ? "38px" : "42px",
      lineHeight: "1.23",
      fontFamily: "Austin, Arial, sans-serif",
      fontWeight: "600",
      color: "rgb(8, 142, 129)",
    },
    titleSubText: {
      maxWidth: "560px",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: isSmScreen ? "20px" : isLgScreen ? "22px" : "24px",
      lineHeight: isSmScreen ? "1.4" : "1.5",
      fontFamily: "PT Sans",
      fontWeight: "300",
      color: "black",
    },
    listCards: {
      marginBottom: 0,
      marginLeft: "auto",
      marginRight: "auto",
      padding: 0,
      maxWidth: isMdScreen ? "640px" : isLgScreen ? "960px" : "1200px",
    },
    cardItem: {
      cursor: "pointer",
      display: "inline",
      marginX: isLgScreen ? "10px" : "20px",
      maxWidth: isMdScreen ? "100%" : "240px",
      backgroundColor: "white",
      borderRadius: "5px",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 0px",
      height: isMdScreen ? "auto" : "253px",
      width: isMdScreen ? "auto" : "100%",
    },
    card: {
      padding: "30px 30px 40px",
    },
    cardTitle: {
      fontSize: isLgScreen ? "20px" : "22px",
      lineHeight: "1.35",
      fontFamily: "PT Sans",
      fontWeight: "600",
      color: "black",
    },
    cardButton: {
      width: "100%",
      marginTop: "10px",
      display: "inline-block",
      color: "#ff8562",
      fontFamily: "PT Sans",
      fontSize: "16px",
      lineHeight: "1.55",
      fontWeight: "700",
      textDecoration: "none",
    },
  };

  return (
    <div style={{ marginBottom: "60px" }}>
      <div style={styles.titleBlock}>
        <Typography textAlign={"center"} style={styles.titleText}>
          Документы и важная информация
        </Typography>

        <Typography textAlign={"center"} style={styles.titleSubText}>
          Для уточнения другой информации звоните в приемный покой <br /> 42-17-39
        </Typography>
      </div>

      <Stack
        direction={isMdScreen ? "column" : "row"}
        justifyContent={"center"}
        spacing={isMdScreen ? 2 : 2}
        useFlexGap
        flexWrap={"wrap"}
        style={styles.listCards}
        flexGrow={1}
      >
        {links.map((item) => (
          <div style={styles.cardItem}>
            <div style={styles.card}>
              <Typography style={styles.cardTitle}>{item.title}</Typography>
              <Typography style={styles.cardButton}>
                <a style={styles.cardButton} href={item.link}>
                  {"Перейти →"}
                </a>
              </Typography>
            </div>
          </div>
        ))}
      </Stack>
    </div>
  );
}

export default DocsView;
