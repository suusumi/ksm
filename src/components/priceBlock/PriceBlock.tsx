import React, { useState, useEffect, ChangeEvent, ReactNode } from "react";
import {
  Typography,
  useTheme,
  useMediaQuery,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  Select,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/**
 * Идентификатор для корректной навигации в шапке.
 * @interface
 *
 * @property {string} id Идентификатор блока.
 */
interface PriceProps {
  id: string;
}

/**
 * Услуга
 * @interface
 *
 * @property {string} serviceText Текст услуги.
 * @property {string} serviceID Идентификатор услуги.
 * @property {string} price Цена услуги.
 * @property {string} AppointmentLink Ссылка на форму.
 * @property {string} AppointmentText Текст кнопки, которая ведёт в форму.
 */
interface Service {
  serviceText: string;
  serviceID: string;
  price: string;
  AppointmentLink: string;
  AppointmentText: string;
}

/**
 * Подкатегория
 * @interface
 *
 * @property {string} subcategoryTitle Заголовок подкатегории.
 * @property {Service[]} services Список услуг.
 */
interface Subcategory {
  subcategoryTitle: string;
  services: Service[];
}

/**
 * Категория
 * @interface
 *
 * @property {string} categoryTitle Заголовок категории.
 * @property {Subcategory[]} subcategories Список подкатегорий.
 */
interface Category {
  categoryTitle: string;
  subcategories: Subcategory[];
}

/**
 * Компонент, отображающий блок услуг
 *
 * @param {PriceProps} id - Идентификатор для корректной навигации в шапке.
 * @returns {ReactNode} Отрисованный компонент Price
 */
const Price: React.FC<PriceProps> = ({ id }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");

  const [priceData, setPriceData] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");

  const [searchText, setSearchText] = useState<string>("");

  const [searchResults, setSearchResults] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const initialData: Category[] = [
        {
          categoryTitle: "Инфекционные болезни",
          subcategories: [
            {
              subcategoryTitle: "Прием (осмотр, консультация)",
              services: [
                {
                  serviceText:
                    "Прием (осмотр, консультация) врача-инфекциониста, заведующего кафедрой инфекционных болезней с эпидемиологией, тропической медициной, кмн",
                  serviceID: "КСМ 1500",
                  price: "1800",
                  AppointmentLink: "/appointment.html",
                  AppointmentText: "Записаться",
                },
                {
                  serviceText:
                    "Прием (осмотр, консультация) врача-инфекциониста, доцента кафедры инфекционных болезней с эпидемиологией, тропической медициной, кмн",
                  serviceID: "КСМ 1501",
                  price: "1600",
                  AppointmentLink: "/appointment.html",
                  AppointmentText: "Записаться",
                },
                {
                  serviceText:
                    "Прием (осмотр, консультация) врача-инфекциониста",
                  serviceID: "КСМ 1502",
                  price: "1200",
                  AppointmentLink: "/appointment.html",
                  AppointmentText: "Записаться",
                },
              ],
            },
          ],
        },
        {
          categoryTitle: "Дерматовенерология",
          subcategories: [
            {
              subcategoryTitle: "Прием (осмотр, консультация)",
              services: [
                {
                  serviceText:
                    "Прием (осмотр, консультация) врача-дерматолога, заведующего кафедрой дерматовенерологии, кмн",
                  serviceID: "КСМ 1400",
                  price: "1800",
                  AppointmentLink: "/appointment.html",
                  AppointmentText: "Записаться",
                },
                {
                  serviceText:
                    "Прием (осмотр, консультация) врача-дерматовенеролога первичный без дерматоскопии",
                  serviceID: "КСМ 1401",
                  price: "1200",
                  AppointmentLink: "/appointment.html",
                  AppointmentText: "Записаться",
                },
                {
                  serviceText:
                    "Прием (осмотр, консультация) врача-дерматовенеролога повторный без дерматоскопии",
                  serviceID: "КСМ 1402",
                  price: "1000",
                  AppointmentLink: "/appointment.html",
                  AppointmentText: "Записаться",
                },
              ],
            },
            {
              subcategoryTitle: "Дерматоскопия",
              services: [
                {
                  serviceText: "Дерматоскопия (1 элемент)",
                  serviceID: "КСМ 1403",
                  price: "450",
                  AppointmentLink: "/appointment.html",
                  AppointmentText: "Записаться",
                },
                {
                  serviceText: "Дерматоскопия за 1 элемент (2-10 элементов)",
                  serviceID: "КСМ 1404",
                  price: "400",
                  AppointmentLink: "/appointment.html",
                  AppointmentText: "Записаться",
                },
                {
                  serviceText:
                    "Дерматоскопия за 1 элемент (более 10 элементов)",
                  serviceID: "КСМ 1405",
                  price: "350",
                  AppointmentLink: "/appointment.html",
                  AppointmentText: "Записаться",
                },
              ],
            },
            {
              subcategoryTitle: "Криодеструкция",
              services: [
                {
                  serviceText:
                    "Криодеструкция доброкачественных образований: папиллом, кератом, плоских вульгарных и подошвенных бородавок, кондиллом и элементов контагиозного моллюска до 0,5 см 1 элемент",
                  serviceID: "КСМ 1406",
                  price: "500",
                  AppointmentLink: "/appointment.html",
                  AppointmentText: "Записаться",
                },
                {
                  serviceText:
                    "Криодеструкция доброкачественных образований: папиллом, кератом, плоских вульгарных и подошвенных бородавок, кондиллом и элементов контагиозного моллюска 0,5 - 1.0 см. 1 элемент",
                  serviceID: "КСМ 1407",
                  price: "1000",
                  AppointmentLink: "/appointment.html",
                  AppointmentText: "Записаться",
                },
                {
                  serviceText:
                    "Криодеструкция доброкачественных образований: папиллом, кератом, плоских вульгарных и подошвенных бородавок, кондиллом и элементов контагиозного моллюска более 1.0 см. 1 элемент",
                  serviceID: "КСМ 1408",
                  price: "1500",
                  AppointmentLink: "/appointment.html",
                  AppointmentText: "Записаться",
                },
              ],
            },
          ],
        },
      ];

      setPriceData(initialData);
    };

    fetchData();
  }, []);

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSelectedCategory(category);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  // Стили для названия карточек
  const SubcategoryText = {
    fontSize: 18,
  };

  const serviceTextStyle = {
    fontSize: 26,
    fontWeight: 400,
  };

  return (
    <Box sx={{ marginBottom: "50px" }} id={id}>
      <Typography
        variant="h2"
        sx={{
          color: "#288e81",
          fontSize: isXsScreen ? 22 : 38,
          fontFamily: "Austin, sans-serif",
          textTransform: "uppercase",
          maxWidth: isXsScreen ? "100%" : 500, // изменение максимальной ширины
          textAlign: isXsScreen ? "center" : "left",
          marginBottom: "25px",
        }}
      >
        Услуги
      </Typography>
      <Box>
        {isXsScreen ? (
          <FormControl fullWidth>
            <Select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value as string)}
              sx={{
                marginBottom: "35px",
                "&.Mui-focused": {
                  borderColor: "#288e81 !important", // цвет обводки при фокусе
                },
              }}
            >
              <MenuItem
                value=""
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "#288e81", // цвет выбранного пункта
                    color: "white", // цвет текста выбранного пункта
                  },
                }}
              >
                Выберите категорию
              </MenuItem>
              {priceData.map((category) => (
                <MenuItem
                  key={category.categoryTitle}
                  value={category.categoryTitle}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "#288e81", // цвет выбранного пункта
                      color: "white", // цвет текста выбранного пункта
                    },
                  }}
                >
                  {category.categoryTitle}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <Box>
            {priceData.map((category) => (
              <Button
                key={category.categoryTitle}
                sx={{
                  backgroundColor: "transparent",
                  border: "2px solid #288e81",
                  color:
                    activeCategory === category.categoryTitle
                      ? "#ffffff"
                      : "#288e81",
                  "&.active": {
                    backgroundColor: "#288e81",
                    color: "#ffffff",
                  },
                  margin: "0px 15px 15px 0",
                  minWidth: "150px", // добавление минимальной ширины кнопки
                }}
                className={
                  activeCategory === category.categoryTitle ? "active" : ""
                }
                onClick={() => handleCategoryChange(category.categoryTitle)}
              >
                {category.categoryTitle}
              </Button>
            ))}
          </Box>
        )}
      </Box>
      <FormControl fullWidth sx={{ marginBottom: "15px" }}>
        <TextField
          label="Поиск по услугам"
          value={searchText}
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#288e81", // цвет обводки при фокусе
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#288e81", // цвет метки при фокусе
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray", // цвет обводки по умолчанию
            },
            "& .MuiInputLabel-root": {
              color: "gray", // цвет метки по умолчанию
            },
          }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const searchText = e.target.value.toLowerCase();
            setSearchText(searchText);
            // Фильтруем услуги на основе текста поиска
            const filteredServices = priceData.flatMap((category) =>
              category.subcategories.flatMap((subcategory) =>
                subcategory.services.filter((service) =>
                  service.serviceText.toLowerCase().includes(searchText),
                ),
              ),
            );
            setSearchResults(filteredServices);
          }}
        />
      </FormControl>
      {searchResults.length > 0 ? (
        <Box>
          {searchText.length > 0 &&
            searchResults.map((service) => (
              <Box key={service.serviceID}>
                {isXsScreen ? (
                  // Вариант отображения для экранов xs
                  <Box sx={{ marginBottom: "35px" }}>
                    <Typography variant="h6">{service.serviceText}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "10px",
                      }}
                    >
                      <Typography variant="body1">
                        {service.serviceID} |{" "}
                        <span style={{ fontFamily: "PT-Sans-Bold" }}>
                          {service.price}Р
                        </span>
                      </Typography>
                      <a
                        href={service.AppointmentLink}
                        style={{
                          color: "#288e81",
                          textDecoration: "none",
                        }}
                      >
                        {service.AppointmentText}
                      </a>
                    </Box>
                  </Box>
                ) : (
                  // Вариант отображения для стандартных экранов
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ maxWidth: "500px", minWidth: "500px" }}
                    >
                      {service.serviceText}
                    </Typography>
                    <Typography variant="body1">{service.serviceID}</Typography>
                    <Typography variant="body1">{service.price}Р</Typography>
                    <a
                      href={service.AppointmentLink}
                      style={{
                        color: "#288e81",
                        textDecoration: "none",
                      }}
                    >
                      {service.AppointmentText}
                    </a>
                  </Box>
                )}
              </Box>
            ))}
        </Box>
      ) : null}

      {selectedCategory && (
        <Box>
          <Box>
            {/* Кнопки для выбора подкатегории */}
            <Box>
              {priceData
                .find((category) => category.categoryTitle === selectedCategory)
                ?.subcategories.map((subcategory) => (
                  <Accordion key={subcategory.subcategoryTitle}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "#288e81" }} />}
                    >
                      <Typography sx={SubcategoryText}>
                        {subcategory.subcategoryTitle}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {subcategory.services
                        .filter((service) =>
                          service.serviceText
                            .toLowerCase()
                            .includes(searchText.toLowerCase()),
                        )
                        .map((service) => (
                          <Box key={service.serviceID}>
                            {isXsScreen ? (
                              // Вариант отображения для экранов xs
                              <Box sx={{ marginBottom: "35px" }}>
                                <Typography variant="h6">
                                  {service.serviceText}
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginTop: "10px",
                                  }}
                                >
                                  <Typography variant="body1">
                                    {service.serviceID} |{" "}
                                    <span
                                      style={{ fontFamily: "PT-Sans-Bold" }}
                                    >
                                      {service.price}Р
                                    </span>
                                  </Typography>
                                  <a
                                    href={service.AppointmentLink}
                                    style={{
                                      color: "#288e81",
                                      textDecoration: "none",
                                    }}
                                  >
                                    {service.AppointmentText}
                                  </a>
                                </Box>
                              </Box>
                            ) : (
                              // Вариант отображения для стандартных экранов
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginBottom: "20px",
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  sx={{ maxWidth: "500px", minWidth: "500px" }}
                                >
                                  {service.serviceText}
                                </Typography>
                                <Typography variant="body1">
                                  {service.serviceID}
                                </Typography>
                                <Typography variant="h6">
                                  {service.price}Р
                                </Typography>
                                <a
                                  href={service.AppointmentLink}
                                  style={{
                                    color: "#288e81",
                                    textDecoration: "none",
                                  }}
                                >
                                  {service.AppointmentText}
                                </a>
                              </Box>
                            )}
                          </Box>
                        ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default Price;
