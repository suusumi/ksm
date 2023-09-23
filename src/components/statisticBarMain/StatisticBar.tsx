import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react'

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



  const TitleText = {
    color: '#288e81',
    textDecoration: 'none',
    fontSize: 65,
    // TODO: шрифт Austin Normal, возможно Regular
    fontFamily: 'AustinMedium, sans-serif'
  };

  const StandartText = {
    color: 'black',
    textDecoration: 'none',
    fontSize: 22,
    fontFamily: 'PT-Sans, sans-serif',
    maxWidth: '250px'
  };
  return (
    <div>
      <Grid container spacing={5}>
        {data.map((item, index) => (
          <Grid key={index} item xs={12} sm={4} md={4} style={{ marginBottom: '30px' }}>
            <Typography sx={TitleText}>{item.title}</Typography>
            <Typography sx={StandartText}>{item.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default StatisticBar