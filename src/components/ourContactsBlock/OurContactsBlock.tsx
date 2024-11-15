import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import OutlineButton from "../outlineButton/OutlineButton";
import { fetchAllContacts } from "../../api/contacts/request";

/**
 * Идентификатор для корректной навигации в шапке.
 * @interface
 *
 * @property {string} id Идентификатор блока.
 */
interface OurContactsBlockProps {
  id: string;
}

/**
 * Социальная сеть
 * @interface
 *
 * @property {string} name Название
 * @property {string} url Ссылка
 */
interface SocialLink {
  name: string;
  url: string;
}

/**
 * Данные по контактам
 * @interface
 *
 */
interface OurContactsBlockData {
  phones: string[];
  mails: string[];
  socialLinks: SocialLink[];
  address: string;
  vk_link: string;
  tg_link: string;
  wa_link: string;
  email_link: string;
}

/**
 * Блок контактов
 *
 * @param {OurContactsBlockProps} id - Идентификатор для корректной навигации в шапке.
 * @return {ReactElement} Отрисованный компонент OurContactsBlock
 */
const OurContactsBlock: React.FC<OurContactsBlockProps> = ({ id }) => {
  // Заглушка с данными по контактам
  const [data, setData] = useState<OurContactsBlockData[]>([]);

  useEffect(() => {
    fetchAllContacts()
        .then((response) => response.json())
        .then((dataArray) => {
          if (dataArray.length > 0) {
            const dataItem = dataArray[0];
            const formattedData: OurContactsBlockData = {
              phones: [dataItem.first_tel, dataItem.second_tel].filter(Boolean),
              mails: [dataItem.mail].filter(Boolean),
              socialLinks: [
                {
                  name: "VK",
                  url: dataItem.vk_link?.trim() || null,
                },
                {
                  name: "Telegram",
                  url: dataItem.tg_link?.trim() || null,
                },
                {
                  name: "WhatsApp",
                  url: dataItem.wa_link?.trim() || null,
                },
                {
                  name: "Email",
                  url: dataItem.email_link?.trim() || null,
                },
              ],
              address: `${dataItem.street}, ${dataItem.city}`,
              vk_link: dataItem.vk_link,
              tg_link: dataItem.tg_link,
              wa_link: dataItem.wa_link,
              email_link: dataItem.email_link,
            };
            setData([formattedData]);
          }
        })
        .catch((error) => console.error("Ошибка при получении данных", error));
  }, []);

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

  const TitleText = {
    color: "#288e81",
    fontSize: isXsScreen ? 22 : 38,
    fontFamily: "Austin, sans-serif",
    textTransform: "uppercase",
    maxWidth: 500,
    textAlign: isXsScreen ? "center" : "left",
    marginBottom: "25px",
  };

  return (
      <div style={{ padding: "20px 0px" }} id={id}>
        <Grid container spacing={5}>
          {/* Левая часть с контактами */}
          <Grid
              item
              xs={12}
              md={6}
              sx={{ textAlign: isXsScreen ? "center" : "left" }}
          >
            <Typography sx={TitleText}>Наши контакты</Typography>
            <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "15px",
                  marginBottom: "20px",
                }}
            >
              {data &&
                  data.map((item, index) => (
                      <div key={`contact-${index}`}>
                        {item.phones
                            .filter((phone) => phone)
                            .map((phone, phoneIndex) => (
                                <OutlineButton
                                    key={`phone-${phoneIndex}`}
                                    buttonText={`${phone}`}
                                    buttonLink={`tel:${phone}`}
                                />
                            ))}
                      </div>
                  ))}
            </div>
            <Typography sx={TitleText}>Социальные сети</Typography>
            <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "15px",
                  marginBottom: "20px",
                }}
            >
              {data &&
                  data.map((item, index) => (
                      <div key={`social-${index}`}>
                        {item.socialLinks.length > 0 &&
                            item.socialLinks.map((socialLink, socialIndex) => {
                              if (socialLink.url) {
                                const link =
                                    socialLink.name.toLowerCase() === "email"
                                        ? `mailto:${socialLink.url}`
                                        : socialLink.url;
                                return (
                                    <OutlineButton
                                        key={`social-${socialIndex}`}
                                        buttonText={socialLink.name}
                                        buttonLink={link}
                                    />
                                );
                              } else {
                                return null;
                              }
                            })}
                      </div>
                  ))}
            </div>
            <Typography sx={TitleText}>Адрес</Typography>
            <OutlineButton
                buttonText={data.length > 0 ? data[0].address : ""}
                buttonLink="https://yandex.ru/maps/-/CDQ0vANl"
            />
          </Grid>
          {/* Правая часть с виджетом YClients */}
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: isXsScreen ? "center" : "left",
                }}
            >
                {/* Встраиваемый виджет YClients */}
                <iframe
                    src="https://n1267021.yclients.com/company/1128518/personal/menu?o="
                    width="100%"
                    height="720" // Увеличьте высоту, чтобы виджет был полностью виден
                    style={{border: "none", borderRadius: "15px"}} // Добавьте borderRadius для скругления краев
                    title="YClients Widget"
                />
            </Grid>
        </Grid>
      </div>
  );
};

export default OurContactsBlock;