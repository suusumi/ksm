import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'

const Footer: React.FC = () => {
  const linkStyle = { color: 'lightgrey', textDecoration: 'none' };
  const textStyle = { marginTop: '10px'};
  return (
    <Box component="footer" sx={{ backgroundColor: '#171717', width: '100%', paddingTop: 3, paddingBottom: 3 }}>
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} md={6}>
            <Typography variant='h6' sx={{ color: 'white' }}>Клиника семейной медицины</Typography>
            <Typography variant="body2" sx={{ color: 'lightgrey', maxWidth: '370px' }}>
              © 2023 Волгоградский государственный медицинский университет - Все права защищены
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" sx={{ color: 'white' }} gutterBottom>
              Меню
            </Typography>
            <Typography variant="body1" sx={{ color: 'lightgrey' }}>
              Услуги
            </Typography>
             <Typography variant="body1" color="lightgrey" style={textStyle}>
              Записаться на прием
            </Typography>
            <Typography variant="body1" color="lightgrey" style={textStyle}>
              Отзывы
            </Typography>
            <Typography variant="body1" color="lightgrey" style={textStyle}>
              О нас
            </Typography>
            <Typography variant="body1" color="lightgrey" style={textStyle}>
              Наши специалисты
            </Typography>
            <Typography variant="body1" color="lightgrey" style={textStyle}>
              Где мы находимся
            </Typography>
            <Typography variant="body1" color="lightgrey" style={textStyle}>
              Контакты
            </Typography>
            <Typography variant="body1" color="lightgrey" style={textStyle}>
              Документы
            </Typography>
            <Typography variant="body1" color="lightgrey" style={textStyle}>
              Политика конфиденциальности
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" sx={{ color: 'white' }} gutterBottom>
              Контакты
            </Typography>
            <Typography variant="body1" sx={{ color: 'lightgrey', paddingTop:'10px' }}>
              <a href="tel:971212" style={linkStyle}>(8442) 97-12-12</a>
            </Typography>
            <Typography variant="body1" sx={{ color: 'white' }} style={textStyle}>
              <a href="tel:+79370971212" style={linkStyle}>+7 (937) 097-12-12</a>
            </Typography>
            <Typography variant="h6" color="white" sx={{paddingTop:'10px'}} gutterBottom>
              Социальные сети
            </Typography>
            <Typography variant="body1">
              <a href="tel:971212" style={linkStyle}>VK</a>
            </Typography>
            <Typography variant="body1" sx={{ color: 'white' }} style={textStyle}>
              <a href="tel:+79370971212" style={linkStyle}>TG</a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography sx={{ paddingTop: '30px', fontSize: '12px', color: 'white' }}>
              Информация и цены, представленные на сайте, являются справочными и не являются публичной офертой. Лекарственные средства, медицинские услуги, в том числе методы лечения, медицинская техника имеют противопоказания к их применению и использованию. Существует необходимость ознакомления с инструкцией по их применению и получения консультации специалистов.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer



