import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import PrimaryButton from "../primaryButton/PrimaryButton";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import OutlineButton from "../outlineButton/OutlineButton";

// Виджет Яндекс.Карты с основным подразделением
const yandexMapWidget = `<div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/klinika_semeynoy_meditsiny/1123002518/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Клиника семейной медицины</a><a href="https://yandex.ru/maps/38/volgograd/category/medical_center_clinic/184106108/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Медцентр, клиника в Волгограде</a><iframe src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=44.500105%2C48.699683&mode=search&oid=1123002518&ol=biz&z=16.64" width="100%" height=500px" frameborder="0" allowfullscreen="true" style="position:relative;border:1px solid #e6e6e6;border-radius:8px;"></iframe></div>`;

/**
 * Идентификатор для корректной навигации в шапке.
 * @interface
 *
 * @property {string} id Идентификатор блока.
 */
interface mapBlockProps {
  id: string;
}

/**
 * Данные по департаменту.
 * @interface
 *
 * @property {string} title Название подразделения.
 * @property {string} adress Адрес подразделения.
 * @property {string} yamapLink Ссылка на Яндекс.Карты с меткой подразделения.
 */
interface departmentsData {
  title: string;
  adress: string;
  yamapLink: string;
}

/**
 * Часы работы подразделений.
 * @interface
 *
 * @property {string} workdays Рабочие дни.
 * @property {string} weekends Выходные.
 */
interface departmentHours {
  workdays: string;
  weekends: string;
}

/**
 * Компонент, отображающий блок карты с расположением основного подразделения.
 *
 * @param {mapBlockProps} id - Идентификатор для корректной навигации в шапке.
 * @return {React.FC}  Отрисованный компонент MapBlock.
 */
const MapBlock: React.FC<mapBlockProps> = ({ id }) => {
  const [data, setData] = useState<departmentsData[]>([]);
  const [data2, setData2] = useState<departmentHours[]>([]);

  useEffect(() => {
    // Заглушка с данными по подразделениям
    const departmentsData: departmentsData[] = [
      {
        title: "Подразделение 1",
        adress: "ул. КИМ, 20",
        yamapLink: "https://yandex.ru/maps/-/CDUABFz1",
      },
      {
        title: "Подразделение 2",
        adress: "пл. Павших Борцов, 1",
        yamapLink: "https://yandex.ru/maps/-/CDUgU4l4",
      },
      {
        title: "Поразделение 3",
        adress: "ул. Козловская, 45А",
        yamapLink: "https://yandex.ru/maps/-/CDUgUBls",
      },
      {
        title: "Поразделение 4",
        adress: "ул. КИМ, 18А",
        yamapLink: "https://yandex.ru/maps/-/CDUgUJzP",
      },
    ];
    setData(departmentsData);
  }, []);

  useEffect(() => {
    // Заглушка с данными по часам работы
    const departmentHours: departmentHours[] = [
      {
        workdays: "Понедельник - пятница 08:00-19:00",
        weekends: "Суббота - 09:00-14:00",
      },
    ];
    setData2(departmentHours);
  }, []);

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

  const TitleText = {
    color: "#288e81",
    fontSize: isXsScreen ? 22 : 38,
    fontFamily: "Austin, sans-serif",
    textTransform: "uppercase",
    // maxWidth: isXsScreen ? 240 : 500,
    textAlign: isXsScreen ? "center" : "left",
    // marginBottom: "25px",
  };
  return (
    <Box sx={{ marginBottom: "50px" }} id={id}>
      <Grid container spacing={5}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={TitleText}>Где мы находимся</Typography>
          <Button
            color="primary"
            sx={{
              color: "white",
              backgroundColor: "#288e81",
              borderRadius: "30px",
              fontSize: "14px",
              textTransform: "none",
              padding: "8px 36px",
              display: { xs: "none", sm: "none", lg: "flex" },
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "#1a665d",
              },
            }}
            href="https://yandex.ru/maps/-/CDUABFz1"
          >
            Посмотреть на карте
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <div dangerouslySetInnerHTML={{ __html: yandexMapWidget }}></div>
            <Button
              color="primary"
              sx={{
                color: "white",
                backgroundColor: "#288e81",
                borderRadius: "30px",
                fontSize: "14px",
                textTransform: "none",
                padding: "8px 36px",
                marginTop: "15px",
                display: { xs: "flex", sm: "none", lg: "none" },
                alignContent: "center",
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "#1a665d",
                },
                alignItems: "center",
              }}
              href="https://yandex.ru/maps/-/CDUABFz1"
            >
              Посмотреть на карте
            </Button>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "15px",
              }}
            >
              {/*{data.map((item, index) => (*/}
              {/*  <div key={index}>*/}
              {/*    <OutlineButton*/}
              {/*      buttonText={`${item.title} ${item.adress}`}*/}
              {/*      buttonLink={item.yamapLink}*/}
              {/*    />*/}
              {/*  </div>*/}
              {/*))}*/}
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <Typography sx={TitleText}>График работы клиники</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: "10px",
                  marginTop: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    color: "#288e81",
                    borderColor: "#288e81",
                    borderRadius: "20px",
                    textTransform: "none",
                    fontSize: "16px",
                    padding: "8px 20px",
                    width: { xs: "100%", md: "calc(50% - 5px)" }, // Равномерное распределение на десктопе
                    "&:hover": {
                      borderColor: "#1a665d",
                      backgroundColor: "rgba(40, 142, 129, 0.1)",
                    },
                  }}
                >
                  Понедельник - пятница: 08:00-19:00
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#288e81",
                    borderColor: "#288e81",
                    borderRadius: "20px",
                    textTransform: "none",
                    fontSize: "16px",
                    padding: "8px 20px",
                    width: { xs: "100%", md: "calc(50% - 5px)" }, // Равномерное распределение на десктопе
                    "&:hover": {
                      borderColor: "#1a665d",
                      backgroundColor: "rgba(40, 142, 129, 0.1)",
                    },
                  }}
                >
                  Суббота: 09:00-14:00
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MapBlock;
