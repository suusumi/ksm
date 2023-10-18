import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const fullScreenStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999,
};

interface FullScreenMobileHeaderProps {
  closeMenu: () => void;
}

function FullScreenMobileHeader({ closeMenu }: FullScreenMobileHeaderProps) {
  const [open, setOpen] = useState(true);

  const handleMenuClose = () => {
    setOpen(false);
    closeMenu();
  };

  return open ? (
    <Box sx={fullScreenStyles}>
      <Typography>Test menu</Typography>
      <Button onClick={handleMenuClose}>Закрыть меню</Button>
    </Box>
  ) : null;
}

export default FullScreenMobileHeader;
