import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import React from 'react'

function StatisticBar() {
    const TitleText = {
  color: '#288e81',
  textDecoration: 'none',
  fontSize: 65,
  // TODO: шрифт Austin Normal, возможно Regular
  fontFamily: 'Austin, sans-serif'
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
        <Grid item xs={12} sm={4} md={4}>
          <Typography sx={TitleText}>
            35+
          </Typography>
          <Typography sx={StandartText}>
            Специалистов из разных областей
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
           <Typography sx={TitleText}>
            17 лет
          </Typography>
          <Typography sx={StandartText}>
            На страже вашего здоровья
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
           <Typography sx={TitleText}>
            18+
          </Typography>
          <Typography sx={StandartText}>
            Областей медицинской помощи
          </Typography>
        </Grid> 
      </Grid>
    </div>
  )
}

export default StatisticBar