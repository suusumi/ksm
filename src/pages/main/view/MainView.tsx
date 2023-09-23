import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import React from 'react'
import StatisticBar from '../../../components/statisticBarMain/StatisticBar';
import WelcomeBlock from '../../../components/welcomeBlock/WelcomeBlock';

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
      <WelcomeBlock></WelcomeBlock>
      <StatisticBar></StatisticBar>
    </div>
  )
}

export default MainView