import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import StatisticBar from "../../../components/statisticBarMain/StatisticBar";
import WelcomeBlock from "../../../components/welcomeBlock/WelcomeBlock";
import AboutUsBlock from "../../../components/aboutUsBlock/AboutUsBlock";
import CarouselBlock from "../../../components/carouselBlock/CarouselBlock";
import Container from "@mui/material/Container";
import OurContactsBlock from "../../../components/ourContactsBlock/OurContactsBlock";
import ReviewsFromMapBlock from "../../../components/reviewsFromMapBlock/ReviewsFromMapBlock";
import OurSpecialists from "../../../components/ourSpecialists/OurSpecialists";
import Price from "../../../components/priceBlock/PriceBlock";
import MapBlock from "../../../components/mapBlock/MapBlock";

function MainView() {
  const TitleText = {
    color: "#288e81",
    textDecoration: "none",
    fontSize: 65,
    // TODO: шрифт Austin Normal, возможно Regular
    fontFamily: "Austin, sans-serif",
  };

  const StandartText = {
    color: "black",
    textDecoration: "none",
    fontSize: 22,
    fontFamily: "PT-Sans, sans-serif",
    maxWidth: "250px",
  };

  return (
    <div>
      <Container>
        <WelcomeBlock />
        <StatisticBar />
      </Container>
      <CarouselBlock></CarouselBlock>
      <Container>
        <AboutUsBlock id="aboutUsBlock" />
        <OurContactsBlock id="ourContactsBlock"></OurContactsBlock>
        <OurSpecialists id="ourSpecialists"></OurSpecialists>
        <ReviewsFromMapBlock id="reviewsFromMapBlock"></ReviewsFromMapBlock>
        <Price id="priceBlock"></Price>
        <MapBlock id="mapBlock" />
      </Container>
    </div>
  );
}

export default MainView;
