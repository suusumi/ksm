import React, { useState, useEffect } from "react";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import OutlinedButton from "@mui/material/Button";

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
  const [priceData, setPriceData] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const initialData: Category[] = [
        {
          categoryTitle: "Гастроэнтерология",
          subcategories: [
            {
              subcategoryTitle: "Прием (осмотр, консультация)",
              services: [
                {
                  serviceText:
                    "Прием (осмотр, консультация) врача-гастроэнтеролога, доцента кафедра педиатрии и неонатологии ИНМФО, кмн",
                  serviceID: "КСМ 1200",
                  price: "2000",
                  AppointmentLink: "/appointment.html",
                  AppointmentText: "Записаться",
                },
                {
                  serviceText:
                    "Прием (осмотр, консультация) врача-гастроэнтеролога первичный",
                  serviceID: "КСМ 1201",
                  price: "1200",
                  AppointmentLink: "/appointment.html",
                  AppointmentText: "Записаться",
                },
                {
                  serviceText:
                    "Прием (осмотр, консультация) врача-гастроэнтеролога повторный",
                  serviceID: "КСМ 1202",
                  price: "1000",
                  AppointmentLink: "/appointment.html",
                  AppointmentText: "Записаться",
                },
              ],
            },
          ],
        },
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
      ];

      setPriceData(initialData);
    };

    fetchData();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
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
        {priceData.map((category) => (
          <OutlinedButton
            key={category.categoryTitle}
            onClick={() => handleCategoryChange(category.categoryTitle)}
            sx={{
              color:
                selectedCategory === category.categoryTitle ? "white" : "black",
              backgroundColor:
                selectedCategory === category.categoryTitle
                  ? "#288e81"
                  : "transparent",
              borderColor: "#288e81",
              borderWidth: "2px",
              marginRight: "10px",
              marginBottom: "10px",
              "&:hover": {
                backgroundColor: "#288e81",
                color: "white",
              },
            }}
          >
            {category.categoryTitle}
          </OutlinedButton>
        ))}
      </Box>
      {selectedCategory && (
        <Box>
          {priceData
            .find((category) => category.categoryTitle === selectedCategory)
            ?.subcategories[0]?.services.map((service) => (
              <div key={service.serviceID}>
                <Typography variant="h4">{service.serviceText}</Typography>
                <Typography variant="body1">{service.price}</Typography>
              </div>
            ))}
        </Box>
      )}
    </Box>
  );
};

export default Price;
