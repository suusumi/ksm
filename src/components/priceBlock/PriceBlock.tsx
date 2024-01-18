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
import { fetchAllServices } from "../../api/services/request";
import PriceSearch from "./PriceSearch";
import PriceCategorySelector from "./PriceCategorySelector";

interface PriceProps {
  id: string;
}

interface Service {
  id: number;
  type: string;
  category: string;
  name: string;
  description: string;
  price: number;
}

const Price: React.FC<PriceProps> = ({ id }) => {
  // состояние категории
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // состояние подкатегории
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");

  // массив объектов Service (все услуги)
  const [priceData, setPriceData] = useState<Service[]>([]);

  // активная (выбранная) категория
  const [activeCategory, setActiveCategory] = useState<string>("");

  // текст поиска
  const [searchText, setSearchText] = useState<string>("");

  // результаты поиска
  const [searchResults, setSearchResults] = useState<Service[]>([]);

  // дублирование type
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllServices();
        if (response.ok) {
          const data: Service[] = await response.json(); // Укажите тип данных Service
          setPriceData(data);

          // Фильтруйте уникальные категории здесь
          const uniqueCategories = Array.from(
            new Set(data.map((service) => service.type))
          );

          setUniqueCategories(uniqueCategories);
        } else {
          throw new Error(
            "Ошибка в получении всех услуг: " + response.statusText
          );
        }
      } catch (error) {
        throw new Error("Ошибка: " + error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    // Фильтруем данные по тексту поиска
    const filteredServices = priceData.filter((service) =>
      service.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredServices);
  }, [searchText, priceData]);

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

  const handleCategoryChange = (type: string) => {
    console.log("handleCategoryChange called with type:", type);
    setActiveCategory(type);
    setSelectedCategory(type);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const SubcategoryText = {
    fontSize: 18,
  };

  return (
    <Box sx={{ marginBottom: isXsScreen ? "25px" : "50px" }} id={id}>
      <Typography
        variant="h2"
        sx={{
          color: "#288e81",
          fontSize: isXsScreen ? 22 : 38,
          fontFamily: "Austin, sans-serif",
          textTransform: "uppercase",
          maxWidth: isXsScreen ? "100%" : 500,
          textAlign: isXsScreen ? "center" : "left",
          marginBottom: "25px",
        }}
      >
        Услуги
      </Typography>

      {/* Кнопки/селектор категории */}
      {/* <PriceCategorySelector
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        priceData={priceData}
        activeCategory={activeCategory}
        isXsScreen={isXsScreen}
      /> */}

      {/* Поиск по прайсу */}
      <FormControl fullWidth sx={{ marginBottom: "15px" }}>
        <PriceSearch searchText={searchText} onSearchChange={setSearchText} />
      </FormControl>
      {/* Результаты поиска */}
      {searchResults.length > 0 ? (
        <Box>
          {searchText.length > 0 &&
            searchResults.map((service) => (
              <Box key={service.id}>
                {isXsScreen ? (
                  <Box sx={{ marginBottom: "35px" }}>
                    <Typography variant="h6">{service.name}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "10px",
                      }}
                    >
                      <Typography variant="body1">
                        {service.description} |{" "}
                        <span style={{ fontFamily: "PT-Sans-Bold" }}>
                          {service.price}Р
                        </span>
                      </Typography>
                      <a
                        href="/appointment/"
                        style={{
                          color: "#288e81",
                          textDecoration: "none",
                        }}
                      >
                        Записаться
                      </a>
                    </Box>
                  </Box>
                ) : (
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
                      {service.name}
                    </Typography>
                    <Typography variant="body1">
                      {service.description}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {service.price}Р
                    </Typography>
                    <a
                      href="/appointment/"
                      style={{
                        color: "#288e81",
                        textDecoration: "none",
                      }}
                    >
                      Записаться
                    </a>
                  </Box>
                )}
              </Box>
            ))}
        </Box>
      ) : null}

      {/* Отображение выпадающих список с их услугами */}
      {selectedCategory && (
        <Box>
          <Box>
            <Box>
              {priceData
                .filter((service) => service.type === selectedCategory)
                .map((service) => (
                  <Accordion key={service.id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "#288e81" }} />}
                    >
                      <Typography sx={SubcategoryText}>
                        {service.category}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box key={service.id}>
                        {isXsScreen ? (
                          <Box sx={{ marginBottom: "35px" }}>
                            <Typography variant="h6">{service.name}</Typography>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "10px",
                              }}
                            >
                              <Typography variant="body1">
                                {service.description} |{" "}
                                <span style={{ fontFamily: "PT-Sans-Bold" }}>
                                  {service.price}Р
                                </span>
                              </Typography>
                              <a
                                href="/appointment/"
                                style={{
                                  color: "#288e81",
                                  textDecoration: "none",
                                }}
                              >
                                Записаться
                              </a>
                            </Box>
                          </Box>
                        ) : (
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
                              {service.name}
                            </Typography>
                            <Typography variant="body1">
                              {service.description}
                            </Typography>
                            <Typography variant="body1">
                              {service.price}Р
                            </Typography>
                            <a
                              href="/appointment/"
                              style={{
                                color: "#288e81",
                                textDecoration: "none",
                              }}
                            >
                              Записаться
                            </a>
                          </Box>
                        )}
                      </Box>
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
