import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import PrimaryButton from '../primaryButton/PrimaryButton';
import { routes } from '../../assets/routes/routes';

const ButtonAppBar: React.FC<{}> = () => {
  // Состояния для меню иконки и выпадающего меню
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Создаем массив элементов меню
  const menuItems = [
    { label: 'О клинике', onClick: () => handleMenuClick('О клинике') },
    { label: 'Наши специалисты', onClick: () => handleMenuClick('Наши специалисты') },
    { label: 'Услуги', onClick: () => handleMenuClick('Услуги') },
    { label: 'Где мы находимся', onClick: () => handleMenuClick('Где мы находимся') },
    { label: 'Контакты', onClick: () => handleMenuClick('Контакты') },
  ];

  // Обработчик открытия выпадающего меню
  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Обработчик закрытия выпадающего меню
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Обработчик открытия/закрытия меню на мобильных устройствах
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Обработчик клика по элементу меню
  const handleMenuClick = (label: string) => {
    // Здесь можно добавить логику для обработки клика по элементу меню
    // Например, можно перейти на соответствующую страницу
    console.log(`Clicked on ${label}`);
    handleClose(); // Закрываем меню
  };

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: isXsScreen ? '100%' : '80%', // 100% ширина на экранах xs, 80% на остальных
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: '54',
          backgroundColor: 'white',
          boxShadow: '0',
          borderRadius: isXsScreen ? '0' : '0px 0px 20px 20px', // Без скругления на экранах xs
        }}
      >
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <img src="/logos/header_logo.svg" alt="" style={{ width: isXsScreen ? '50%' : '30%', margin: '10px 0px' }} />
          </Typography>
          {/* Навигационные кнопки для десктопа */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                sx={{ color: 'black', fontSize: '14px', textTransform: 'none', padding: '8px 16px', whiteSpace: 'nowrap' }}
                onClick={item.onClick}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          {/* Иконка меню для мобильных устройств */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: 'black' }}
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Button href={routes.appointment} sx={{
              color: 'white',
              backgroundColor: '#288e81',
              borderRadius: '30px',
              fontSize: '14px',
              textTransform: 'none',
              padding: '8px 36px',
              display: { xs: 'flex', sm: 'none', lg: 'flex' },
              whiteSpace: 'nowrap',
              '&:hover': {
                backgroundColor: '#1a665d',
              },
            }}>Записаться на прием</Button>
          </Box>
          {/* Выпадающее меню на мобильных устройствах */}
          <Menu
            anchorEl={menuOpen ? anchorEl : null}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={menuOpen}
            onClose={toggleMenu}
          >
            {menuItems.map((item, index) => (
              <MenuItem key={index} onClick={item.onClick}>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
