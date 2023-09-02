import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import React from 'react'
import StatisticBar from '../../../components/statisticBarMain/StatisticBar';
import WelcomeBlock from '../../../components/welcomeBlock/WelcomeBlock';
import AboutUsBlock from '../../../components/aboutUsBlock/AboutUsBlock';
import CarouselBlock from '../../../components/carouselBlock/CarouselBlock';
import Container from '@mui/material/Container';
import OurContactsBlock from '../../../components/ourContactsBlock/OurContactsBlock';

function MainView() {
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
      <Container>
      <WelcomeBlock></WelcomeBlock>
      <StatisticBar></StatisticBar>
      </Container>
      <CarouselBlock></CarouselBlock>
      <Container>
      <AboutUsBlock></AboutUsBlock>
      <OurContactsBlock></OurContactsBlock>
      </Container>
    </div>
  )
}

export default MainView