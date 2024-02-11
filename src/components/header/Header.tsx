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
import logo from "../../assets/content/header-logo.svg";

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

  const ButtonStyle = {
    color: "white",
    backgroundColor: "#288e81",
    borderRadius: "30px",
    fontSize: "14px",
    textTransform: "none",
    padding: "8px 36px",
    display: { xs: "flex", sm: "none", lg: "flex" },
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "#1a665d",
    },
  };

  // Создаем массив элементов меню
  const menuItems = [
    {
      label: "О клинике",
      onClick: () => {},
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
        if (window.location.pathname === routes.main) {
          scrollToBlock("ourSpecialists");
        } else {
          await navigate(routes.main);
          scrollToBlock("ourSpecialists");
        }
      },
      // onClick: () => scrollToBlock("ourSpecialistsBlock"),
    },
    { label: "Услуги", onClick: () => scrollToBlock("priceBlock") },
    {
      label: "Где мы находимся",
      onClick: async () => {
        console.log("Тестовый console log");

        if (window.location.pathname === routes.main) {
          scrollToBlock("mapBlock");
        } else {
          await navigate(routes.main);
          scrollToBlock("mapBlock");
        }
      },
    },
    {
      label: "Контакты",
      onClick: () => {
        scrollToBlock("ourContactsBlock");
      },
      subMenuItems: [
        {
          label: "(8442) 42-05-79",
          onClick: () => {
            const phoneNumber = "(8442) 42-05-79"; // The phone number you want to dial
            window.open(`tel:${phoneNumber}`);
          },
        },
        {
          label: "(8442) 42-17-39",
          onClick: () => {
            const phoneNumber = "(8442) 42-17-39"; // The phone number you want to dial
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
              src={logo}
              alt=""
              style={{
                width: isXsScreen ? "40%" : "10em",
                margin: "10px 0px",
                cursor: "pointer",
              }}
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
                  "&:hover": {
                    backgroundColor: "transparent", // Set the desired background color on hover
                  },
                }}
                onClick={() => item.onClick()}
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
                        onClick={() => {
                          console.log("Тестовый console log");
                          subItem.onClick();
                        }}
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
            <Button
              sx={ButtonStyle}
              onClick={() => navigate(routes.goToAppointment("null", "null"))}
            >
              Записаться на прием
            </Button>
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
