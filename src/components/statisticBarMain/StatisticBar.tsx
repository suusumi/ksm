import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react'
import { ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

interface StatisticItem {
  title: string;
  description: string;
}

function StatisticBar() {
  const [data, setData] = useState<StatisticItem[]>([]);

  useEffect(() => {
    // Пример получения данных с сервера:
    // fetch('URL_ВАШЕГО_СЕРВЕРА')
    //   .then(response => response.json())
    //   .then(data => setData(data))
    //   .catch(error => console.error('Ошибка при получении данных', error));

    const statisticData: StatisticItem[] = [
      { title: '35+', description: 'Специалистов из разных областей' },
      { title: '17 лет', description: 'На страже вашего здоровья' },
      { title: '18+', description: 'Областей медицинской помощи' },
    ];

    setData(statisticData);
  }, []);

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only('xs'));

  const TitleText = {
    color: '#288e81',
    textDecoration: 'none',
    fontSize: isXsScreen ? 35 : 65,
    fontFamily: 'AustinMedium, sans-serif',
    display: 'flex',
    textAlign: isXsScreen ? 'center' : 'left',
  };

  const StandartText = {
    color: 'black',
    textDecoration: 'none',
    fontSize: isXsScreen ? 16 : 22,
    fontFamily: 'PT-Sans, sans-serif',
    maxWidth: '250px',
    display: 'flex',
    textAlign: isXsScreen ? 'center' : 'left',
  };
  return (
    <div style={{padding: '20px 0px'}}>
      <Grid container spacing={5}>
        {data.map((item, index) => (
          <Grid key={index} item xs={12} sm={4} md={4} style={{ marginBottom: '30px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: isXsScreen ? 'center' : 'flex-start', // Центрирование по центру на xs, влево на остальных
              }}
            >
              <Typography sx={TitleText}>{item.title}</Typography>
              <Typography sx={StandartText}>{item.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default StatisticBar