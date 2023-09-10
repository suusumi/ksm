import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Grid, Box } from '@mui/material';

function OurSpecialists() {
  const items = [
    {
      imageUrl: 'https://i.ibb.co/JtVms49/tild3332-6363-4764-a465-376264616662-163780-tarasova-nv.jpg',
      name: 'ФИО1',
      text: 'Врач-терапевт',
      subtext: 'Доктор медицинских наук',
    },
    {
      imageUrl: 'https://i.ibb.co/rHzDVKm/tild3264-3465-4266-a166-316233316334-163783-akhmed-bassam.jpg',
      name: 'ФИО2',
      text: 'Врач-терапевт',
      subtext: 'Доктор медицинских наук',
    },
    {
      imageUrl: 'https://i.ibb.co/T8M0wHG/tild3234-3063-4534-b735-306464383135-163812-malanin-da.jpg',
      name: 'ФИО3',
      text: 'Врач-терапевт',
      subtext: 'Доктор медицинских наук',
    },
    {
      imageUrl: 'https://i.ibb.co/CPXdKfr/tild3363-3830-4232-a135-353739393161-163787-lisina-oa.jpg',
      name: 'ФИО4',
      text: 'Зам врача',
      subtext: 'Пупупупу',
    },
  ];

  // TODO: может использовать Slick carousel?
  const carouselSettings = {
    dots = true,
    speed: 0,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (

  )
  // return (
  //   <Box>
  //     <Carousel>
  //       {items.map((item, index) => (
  //         <Paper key={index} sx={{ p: 2 }}>
  //           <Grid container spacing={2}>
  //             <Grid item xs={12} sm={6} md={3}>
  //               <img src={item.imageUrl} alt={item.text} style={{ maxWidth: '200px', maxHeight: '250px' }} />
  //               <Typography variant="h6">{item.name}</Typography>
  //               <Typography variant="body1">{item.text}</Typography>
  //               <Typography variant="body2">{item.subtext}</Typography>
  //             </Grid>
  //           </Grid>
  //         </Paper>
  //       ))}
  //     </Carousel>
  //   </Box>
  // );
}

export default OurSpecialists;
