import Button from '@mui/material/Button';
import React from 'react';

interface OutlineButtonProps {
  buttonText: string;
  buttonLink: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ buttonText, buttonLink }) => {
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
        margin: '0 15px 15px 0',
        '&:hover': {
          backgroundColor: '#288e81',
          color: 'white',
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