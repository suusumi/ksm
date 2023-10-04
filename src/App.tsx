import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainScreen from "./pages/main/MainScreen";
import Container from "@mui/material/Container";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Footer from "./components/footer/Footer";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Theme from "./assets/theme/Theme";
import Preloader from "./components/preloader/Preloader";
import gsap from "gsap";
import AllSpecialistsScreen from "./pages/allSpecialists/AllSpecialistsScreen";
import SpecialistScreen from "./pages/specialist/SpecialistScreen";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        {/* <Preloader></Preloader> */}
        <Container>
          <Header />
        </Container>
        <div style={{ marginBottom: "150px" }}></div>
        <Routes>
          <Route path="/" element={<AllSpecialistsScreen />} />
          <Route
            path="/specialist-details/:id"
            element={<SpecialistScreen />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
