import Button from '@mui/material/Button';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface OutlineButtonProps {
  buttonText: string;
  buttonLink: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ buttonText, buttonLink }) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Button
      sx={{
        color: 'black',
        backgroundColor: 'transparent',
        borderRadius: '10px',
        fontSize: '14px',
        textTransform: 'none',
        padding: '8px 36px',
        whiteSpace: 'nowrap',
        border: '2px solid #288e81',
        margin: isXsScreen ? '0 15px 15px 15px' : '0 15px 15px 0px',
        '&:hover': {
          backgroundColor: '#288e81',
          color: 'white',
        },
      }}
      href={buttonLink}
      target="_blank"   // Опционально, для открытия ссылки в новой вкладке
    >
      {buttonText}
    </Button>
  );
};

export default OutlineButton;