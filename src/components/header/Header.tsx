import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PrimaryButton from '../primaryButton/PrimaryButton';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{paddingTop:'10px', paddingBottom:'10px',borderRadius: '0 0 20px 20px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography  component="div" sx={{ flexGrow: 1 }}>
            <img src="/logos/header_logo.svg" alt="" style={{width:'45%'}} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <Button color="inherit" sx={{color: 'black', fontSize: '14px', textTransform: 'none', padding: '8px 16px', whiteSpace: 'nowrap'}}>О клинике</Button>
          <Button color="inherit" sx={{color: 'black', fontSize: '14px', textTransform: 'none', padding: '8px 16px', whiteSpace: 'nowrap'}}>Наши специалисты</Button>
          <Button color="inherit" sx={{color: 'black', fontSize: '14px', textTransform: 'none', padding: '8px 16px', whiteSpace: 'nowrap'}}>Услуги</Button>
          <Button color="inherit" sx={{color: 'black', fontSize: '14px', textTransform: 'none', padding: '8px 16px', whiteSpace: 'nowrap'}}>Где мы находимся</Button>
          <Button color="inherit" sx={{color: 'black', fontSize: '14px', textTransform: 'none', padding: '8px 16px', whiteSpace: 'nowrap'}}>Контакты</Button>
          </Box>
          <PrimaryButton buttonText='Записаться на прием'></PrimaryButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
