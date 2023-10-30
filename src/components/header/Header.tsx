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
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../assets/routes/routes";

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

  const handleClose = (index: number) => {
    setAnchorEls({ ...anchorEls, [index]: null });
  };

  const handleMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    setAnchorEls({ ...anchorEls, [index]: event.currentTarget });
  };

  const toggleFullScreenMenu = () => {
    setFullScreenMenuOpen(!fullScreenMenuOpen);
  };

  // TODO: убирание мышки
  const handleMouseLeave = (index: number) => {
    setTimeout(() => {
      setAnchorEls((prevAnchorEls) => ({ ...prevAnchorEls, [index]: null }));
    }, 200); // Устанавливаем задержку в 200 миллисекунд перед закрытием SubMenu
  };

  const navigate = useNavigate();

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

  // Создаем массив элементов меню
  const menuItems = [
    {
      label: "О клинике",
      onClick: () => {
        navigate(routes.main);
      },
      subMenuItems: [
        {
          label: "Документы",
          onClick: () => {
            navigate(routes.docs);
          },
        },
        {
          label: "О нас",
          onClick: async () => {
            await navigate(routes.main);
            scrollToBlock("aboutUsBlock");
          },
        },
        {
          label: "Политика конфиденциальности",
          onClick: () => {
            navigate(routes.privacyPolicy);
          },
        },
      ],
    },
    {
      label: "Наши специалисты",
      onClick: async () => {
        navigate(routes.main);
        scrollToBlock("ourSpecialistsBlock");
      },
      // onClick: () => scrollToBlock("ourSpecialistsBlock"),
    },
    { label: "Услуги", onClick: () => scrollToBlock("priceBlock") },
    { label: "Где мы находимся", onClick: () => scrollToBlock("mapBlock") },
    {
      label: "Контакты",
      onClick: () => {
        scrollToBlock("ourContactsBlock");
      },
      subMenuItems: [
        {
          label: "+7 (937) 097-12-12",
          onClick: () => {
            const phoneNumber = "+79370971212"; // The phone number you want to dial
            window.open(`tel:${phoneNumber}`);
          },
        },
        {
          label: "(8442) 97-12-12",
          onClick: () => {
            const phoneNumber = "(8442) 97-12-12"; // The phone number you want to dial
            window.open(`tel:${phoneNumber}`);
          },
        },
      ],
    },
  ];

  // Обработчик открытия выпадающего меню
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
              onClick={() => navigate(routes.main)}
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
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleMenu(e, index)
                }
              >
                {item.label}
                {item.subMenuItems && (
                  <Menu
                    anchorEl={anchorEls[index]}
                    open={Boolean(anchorEls[index])}
                    onClose={() => handleClose(index)}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    MenuListProps={{
                      onMouseLeave: (event) => handleClose(index),
                    }}
                  >
                    {item.subMenuItems.map((subItem, subIndex) => (
                      <MenuItem
                        key={subIndex}
                        onClick={() => subItem.onClick()}
                      >
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
