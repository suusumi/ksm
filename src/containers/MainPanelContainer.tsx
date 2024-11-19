import { Container } from "@mui/material";
import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

interface IMainPanelContainer {
  children: JSX.Element;
}

export const MainPanelContainer: React.FC<IMainPanelContainer> = ({
  children,
}) => {
  return (
    <>
      {/*<Container>*/}
        <Header />
        <div style={{ marginBottom: "140px" }}></div>
        {children}
      {/*</Container>*/}
      <Footer />
    </>
  );
};
