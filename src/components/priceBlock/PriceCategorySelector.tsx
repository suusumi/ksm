import React from "react";
import { FormControl, Select, MenuItem, Button } from "@mui/material";

// Интерфейс для типа данных "Service"
interface Service {
  id: number;
  type: string;
}

// Интерфейс для пропсов компонента "PriceCategorySelector"
interface CategorySelectorProps {
  selectedCategory: string; // Выбранная категория
  handleCategoryChange: (type: string) => void; // Функция для изменения выбранной категории
  priceData: Service[]; // Массив данных о категориях
  activeCategory: string; // Активная категория
  isXsScreen: boolean; // Флаг для определения экрана с размером "xs"
}

const PriceCategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategory,
  handleCategoryChange,
  priceData,
  activeCategory,
  isXsScreen,
}) => {
  return (
    <div>
      {isXsScreen ? ( // Если экран имеет размер "xs"
        <FormControl fullWidth>
          <Select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
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
        // В противном случае (экран больше "xs")
        <div>
          {priceData.map((service) => (
            <Button
              key={service.id}
              sx={{
                backgroundColor: "transparent",
                border: "2px solid #288e81",
                color: activeCategory === service.type ? "#ffffff" : "#288e81",
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
        </div>
      )}
    </div>
  );
};

export default PriceCategorySelector;
