import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../assets/routes/routes";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const fullScreenStyles = {
  width: "100%",
  height: "100%",
  background: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
};

const MobileMenu = {
  fontFamily: " PT-Sans, sans-serif",
  color: "black",
  textTransform: "none",
  fontSize: "16px",
};
interface FullScreenMobileHeaderProps {
  closeMenu: () => void;
}

function FullScreenMobileHeader({ closeMenu }: FullScreenMobileHeaderProps) {
  const handleMenuClose = () => {
    closeMenu();
  };

  const navigate = useNavigate();

  const scrollToBlock = (blockId: string) => {
    const block = document.getElementById(blockId);
    if (block) {
      block.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        navigate(routes.main);
        scrollToBlock("ourSpecialists");
      },
      // onClick: () => scrollToBlock("ourSpecialistsBlock"),
    },
    {
      label: "Услуги",
      onClick: async () => {
        navigate(routes.main);
        scrollToBlock("priceBlock");
      },
      // onClick: () => scrollToBlock("ourSpecialistsBlock"),
    },
    {
      label: "Отзывы",
      onClick: async () => {
        navigate(routes.main);
        scrollToBlock("reviewsFromMapBlock");
      },
      // onClick: () => scrollToBlock("ourSpecialistsBlock"),
    },
    {
      label: "Контакты",
      onClick: async () => {
        navigate(routes.main);
        scrollToBlock("contactsBlock");
      },
      // onClick: () => scrollToBlock("ourSpecialistsBlock"),
    },
  ];
  return (
    <Box sx={fullScreenStyles}>
      <Accordion
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxShadow: "none", // Убираем тень
          border: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#288e81" }} />}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          {menuItems[0].label}
        </AccordionSummary>
        <AccordionDetails>
          {menuItems[0]?.subMenuItems?.map((item, index) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Button
                key={index}
                onClick={(event) => {
                  handleMenuClose();
                  item.onClick();
                }}
                sx={MobileMenu}
              >
                {item.label}
              </Button>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
      {menuItems.slice(1).map((item, index) => (
        <Button
          key={index}
          onClick={(event) => {
            handleMenuClose();
            item.onClick();
          }}
          sx={MobileMenu}
        >
          {item.label}
        </Button>
      ))}
      <Box
        sx={{
          marginTop: "40px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ marginBottom: "20px" }}>
          {/* TODO: правильно подключить свгшку */}
          <img src="phone_ksm.png" alt="" />
          <Button
            sx={{
              fontFamily: " PT-Sans, sans-serif",
              textTransform: "none",
              fontSize: "18px",
            }}
            href="tel:(8442) 97-12-12"
          >
            (8442) 97-12-12
          </Button>
        </Box>

        <Box>
          {/* TODO: правильно подключить свгшку */}
          <img src="phone_ksm.png" alt="" />
          <Button
            sx={{
              fontFamily: " PT-Sans, sans-serif",
              textTransform: "none",
              fontSize: "18px",
            }}
            href="tel:79370971212"
          >
            +7 (937) 097-12-12
          </Button>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          marginTop: "50px",
          borderRadius: "30px",
          textTransform: "none",
        }}
        onClick={() => {
          navigate(routes.goToAppointment('null', 'null'));
          closeMenu(); // Закрывает основное меню
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Записаться на прием
      </Button>
      {/* <Button onClick={handleMenuClose}>Закрыть меню</Button> */}
    </Box>
  );
}

export default FullScreenMobileHeader;
