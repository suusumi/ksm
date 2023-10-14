import React from "react";
import { FormControl, Select, MenuItem, Button } from "@mui/material";
import ServiceType from "./enum/ServiceType";

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
  const uniqueCategories = Array.from(
    new Set(priceData.map((service) => service.type))
  );
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
            {Object.values(ServiceType).map(
              (
                type // Пройдитесь по Enum
              ) => (
                <MenuItem
                  key={type}
                  value={type}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "#288e81",
                      color: "white",
                    },
                  }}
                >
                  {type}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      ) : (
        // В противном случае (экран больше "xs")
        <div>
          {uniqueCategories.map((category) => (
            <Button
              key={category}
              sx={{
                backgroundColor: "transparent",
                border: "2px solid #288e81",
                color: activeCategory === category ? "#ffffff" : "#288e81",
                "&.active": {
                  backgroundColor: "#288e81",
                  color: "#ffffff",
                },
                margin: "0px 15px 15px 0",
                minWidth: "150px",
              }}
              className={activeCategory === category ? "active" : ""}
              onClick={() => handleCategoryChange(category)}
            >
              {ServiceType[category]}
              {/* Используйте Enum для отображения на русском языке */}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceCategorySelector;
