import React, { useState, useEffect, ChangeEvent } from "react";
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

interface Service {
  serviceText: string;
  serviceID: string;
  price: string;
  AppointmentLink: string;
  AppointmentText: string;
}

interface Subcategory {
  subcategoryTitle: string;
  services: Service[];
}

interface Category {
  categoryTitle: string;
  subcategories: Subcategory[];
}

const Price: React.FC = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

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

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSelectedCategory(category);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          color: "#288e81",
          fontSize: isXsScreen ? 22 : 38,
          fontFamily: "Austin, sans-serif",
          textTransform: "uppercase",
          maxWidth: isXsScreen ? 500 : 500,
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
              sx={{ marginBottom: "35px" }}
            >
              <MenuItem value="">Выберите категорию</MenuItem>
              {priceData.map((category) => (
                <MenuItem
                  key={category.categoryTitle}
                  value={category.categoryTitle}
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
                <Typography variant="h6">{service.serviceText}</Typography>
                <Typography variant="body1">Цена: {service.price}</Typography>
                <Typography variant="body1">
                  <a href={service.AppointmentLink}>
                    {service.AppointmentText}
                  </a>
                </Typography>
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
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>{subcategory.subcategoryTitle}</Typography>
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
                            <Typography variant="h6">
                              {service.serviceText}
                            </Typography>
                            <Typography variant="body1">
                              Цена: {service.price}
                            </Typography>
                            <Typography variant="body1">
                              <a href={service.AppointmentLink}>
                                {service.AppointmentText}
                              </a>
                            </Typography>
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
