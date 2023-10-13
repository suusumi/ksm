import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";

interface SearchProps {
  searchText: string; // Пропс для текущего значения текста поиска
  onSearchChange: (newText: string) => void; // Callback-функция для обновления текста поиска
}

const PriceSearch: React.FC<SearchProps> = ({ searchText, onSearchChange }) => {
  // Обработчик изменения текста поиска
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    onSearchChange(newText); // Вызов функции для обновления текста поиска
  };

  // Стили для текстового поля поиска
  const inputStyles = {
    "& .MuiOutlinedInput-root .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#288e81", // Цвет границы при фокусе
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#288e81", // Цвет метки при фокусе
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "gray", // Цвет обводки по умолчанию
    },
    "& .MuiInputLabel-root": {
      color: "gray", // Цвет метки по умолчанию
    },
  };

  return (
    <TextField
      label="Поиск по услугам"
      value={searchText}
      sx={inputStyles}
      onChange={handleSearchChange} // Установка обработчика изменения текста
    />
  );
};

export default PriceSearch;
