import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

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

interface FullScreenMobileHeaderProps {
  closeMenu: () => void;
}

function FullScreenMobileHeader({ closeMenu }: FullScreenMobileHeaderProps) {
  const handleMenuClose = () => {
    closeMenu();
  };

  return (
    <Box sx={fullScreenStyles}>
      <Typography>Test menu</Typography>
      <Button onClick={handleMenuClose}>Закрыть меню</Button>
    </Box>
  );
}

export default FullScreenMobileHeader;
