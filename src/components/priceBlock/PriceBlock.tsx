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
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");

  const [priceData, setPriceData] = useState<Service[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");

  const [searchText, setSearchText] = useState<string>("");

  const [searchResults, setSearchResults] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllServices();
        if (response.ok) {
          const data = await response.json();
          setPriceData(data);
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

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

  const handleCategoryChange = (type: string) => {
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
    <Box sx={{ marginBottom: "50px" }} id={id}>
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
      <Box>
        {isXsScreen ? (
          <FormControl fullWidth>
            <Select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value as string)}
              sx={{
                marginBottom: "35px",
                "&.Mui-focused": {
                  borderColor: "#288e81 !important",
                },
              }}
            >
              <MenuItem
                value=""
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "#288e81",
                    color: "white",
                  },
                }}
              >
                Выберите категорию
              </MenuItem>
              {priceData.map((service) => (
                <MenuItem
                  key={service.id}
                  value={service.type}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "#288e81",
                      color: "white",
                    },
                  }}
                >
                  {service.type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <Box>
            {priceData.map((service) => (
              <Button
                key={service.id}
                sx={{
                  backgroundColor: "transparent",
                  border: "2px solid #288e81",
                  color:
                    activeCategory === service.type ? "#ffffff" : "#288e81",
                  "&.active": {
                    backgroundColor: "#288e81",
                    color: "#ffffff",
                  },
                  margin: "0px 15px 15px 0",
                  minWidth: "150px",
                }}
                className={activeCategory === service.type ? "active" : ""}
                onClick={() => handleCategoryChange(service.type)}
              >
                {service.type}
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
                borderColor: "#288e81",
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#288e81",
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray",
            },
            "& .MuiInputLabel-root": {
              color: "gray",
            },
          }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const searchText = e.target.value.toLowerCase();
            setSearchText(searchText);
            const filteredServices = priceData.filter((service) =>
              service.name.toLowerCase().includes(searchText)
            );
            setSearchResults(filteredServices);
          }}
        />
      </FormControl>
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
                    <Typography variant="body1">{service.price}Р</Typography>
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
