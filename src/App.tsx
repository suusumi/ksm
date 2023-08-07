import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainScreen from "./pages/main/MainScreen";
import Container from '@mui/material/Container';
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Theme from './assets/theme/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
      <Container>
        <Header />
        <div style={{marginBottom: '180px'}}></div>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          {/* Add more Route elements for other pages */}
        </Routes>
      </Container>
        <Footer/>
    </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
