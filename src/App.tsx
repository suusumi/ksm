import React from 'react';
import './App.css';
import MainScreen from "./pages/main/MainScreen";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './assets/theme/Theme';
import { AdminLoginScreen } from './pages/adminLogin/AdminLoginScreen';
import { InfographicsScreen } from './pages/infographics/InfographicsScreen';
import { routes } from './assets/routes/routes';
import { AdminPanelContainer } from './containers/AdminPanelContainer';
import { MainPanelContainer } from './containers/MainPanelContainer';
import { ServicesScreen } from './pages/services/ServicesScreen';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={routes.main} element={<MainPanelContainer children={<MainScreen />} />} />
          <Route path={routes.authAdmin} element={<AdminLoginScreen />} />
          <Route path={routes.infographics} element={<AdminPanelContainer children={<InfographicsScreen />} />} />
          <Route path={routes.services} element={<AdminPanelContainer children={<ServicesScreen />} />} />
          <Route path='*' element={<Navigate to={'/'} />} />
          {/* Add more Route elements for other pages */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
