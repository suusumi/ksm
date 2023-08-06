import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main";
import Container from '@mui/material/Container';
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <div style={{marginBottom: '180px'}}></div>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* Add more Route elements for other pages */}
        </Routes>
      </Container>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
