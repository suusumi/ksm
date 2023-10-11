import Button from "@mui/material/Button";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * Данные кнопки
 * @interface
 *
 * @property {string} buttonText Текст кнопки
 * @property {string} buttonLink Ссылка
 */
interface OutlineButtonProps {
  buttonText: string;
  buttonLink: string;
}

/**
 * Компонент, отображающий кнопку
 *
 * @param {OutlineButtonProps} props - Данные кнопки
 * @param {string} props.buttonText - Текст кнопки
 * @param {string} props.buttonLink - Ссылка
 * @return {ReactElement} Отрисованный компонент OutlineButton
 */
const OutlineButton: React.FC<OutlineButtonProps> = ({
  buttonText,
  buttonLink,
}) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Button
      sx={{
        color: "black",
        backgroundColor: "transparent",
        borderRadius: "5px",
        fontSize: "14px",
        textTransform: "none",
        padding: "8px 36px",
        whiteSpace: "nowrap",
        border: "2px solid #288e81",
        margin: isXsScreen ? "0 15px 15px 15px" : "0 15px 15px 0px",
        "&:hover": {
          backgroundColor: "#288e81",
          color: "white",
        },
      }}
      href={buttonLink}
      target="_blank" // Опционально, для открытия ссылки в новой вкладке
    >
      {buttonText}
    </Button>
  );
};

export default OutlineButton;
