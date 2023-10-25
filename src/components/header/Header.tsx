import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import PrimaryButton from "../primaryButton/PrimaryButton";
import FullScreenMobileHeader from "./fullScreenMobileHeader";
import { Link } from "react-router-dom";

interface ButtonAppBarProps {}

const ButtonAppBar: React.FC<ButtonAppBarProps> = () => {
  const [anchorEls, setAnchorEls] = useState<
    Record<number, HTMLElement | null>
  >({});
  const [fullScreenMenuOpen, setFullScreenMenuOpen] = useState(false);

  const scrollToBlock = (blockId: string) => {
    const block = document.getElementById(blockId);
    if (block) {
      block.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    setAnchorEls({ ...anchorEls, [index]: event.currentTarget });
  };

  const handleClose = (index: number) => {
    setAnchorEls({ ...anchorEls, [index]: null });
  };

  const toggleFullScreenMenu = () => {
    setFullScreenMenuOpen(!fullScreenMenuOpen);
  };

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

  // Создаем массив элементов меню
  const menuItems = [
    {
      label: "О клинике",
      onClick: () => scrollToBlock(""),
      subMenuItems: [
        {
          label: "Документы",
          onClick: () => {
            /* Handle click for category 1 */
          },
        },
        {
          label: "О нас",
          onClick: () => scrollToBlock("aboutUsBlock"),
        },
        {
          label: "Политика конфиденциальности",
          onClick: () => {
            return <Link to="/privacy-policy" />;
          },
        },
      ],
    },
    {
      label: "Наши специалисты",
      onClick: () => scrollToBlock(""),
      subMenuItems: [
        {
          label: "Пункт специалистов",
          onClick: () => {
            scrollToBlock("ourSpecialists");
          },
        },
        {
          label: "О нас",
          onClick: () => scrollToBlock("aboutUsBlock"),
        },
        {
          label: "Политика конфиденциальности",
          onClick: () => {
            scrollToBlock("mapBlock");
          },
        },
      ],
    },
    { label: "Услуги", onClick: () => scrollToBlock("priceBlock") },
    { label: "Где мы находимся", onClick: () => scrollToBlock("mapBlock") },
    { label: "Контакты", onClick: () => scrollToBlock("ourContactsBlock") },
  ];

  // Обработчик открытия выпадающего мен
  // Обработчик открытия/закрытия меню на мобильных устройствах
  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  // const toggleSubMenu = () => {
  //   setSubMenuOpen(!subMenuOpen);
  // };

  // Обработчик клика по элементу меню

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: isXsScreen ? "100%" : "80%", // 100% ширина на экранах xs, 80% на остальных
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "54",
          backgroundColor: "white",
          boxShadow: "0",
          borderRadius: isXsScreen ? "0" : "0px 0px 20px 20px", // Без скругления на экранах xs
        }}
      >
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <img
              src="/logos/header_logo.svg"
              alt=""
              style={{ width: isXsScreen ? "40%" : "10em", margin: "10px 0px" }}
            />
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                sx={{
                  color: "black",
                  fontSize: "14px",
                  textTransform: "none",
                  padding: "8px 16px",
                  whiteSpace: "nowrap",
                }}
                onClick={item.onClick}
                onMouseOver={(e) => handleMenu(e, index)}
                onMouseOut={() => handleClose(index)}
              >
                {item.label}
                {item.subMenuItems && (
                  <Menu
                    anchorEl={anchorEls[index]}
                    open={Boolean(anchorEls[index])}
                    onClose={() => handleClose(index)}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                  >
                    {item.subMenuItems.map((subItem, subIndex) => (
                      <MenuItem key={subIndex} onClick={subItem.onClick}>
                        {subItem.label}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <PrimaryButton buttonText="Записаться на прием"></PrimaryButton>
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: "black" }}
              onClick={toggleFullScreenMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {fullScreenMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 3,
            backgroundColor: "white",
          }}
        >
          <FullScreenMobileHeader closeMenu={toggleFullScreenMenu} />
        </div>
      )}
    </Box>
  );
};

export default ButtonAppBar;
