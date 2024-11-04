import React, {useEffect, useState} from "react";
import "./App.css";
import MainScreen from "./pages/main/MainScreen";
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./assets/theme/Theme";
import {AdminLoginScreen} from "./pages/adminLogin/AdminLoginScreen";
import {InfographicsScreen} from "./pages/infographics/InfographicsScreen";
import {routes} from "./assets/routes/routes";
import {AdminPanelContainer} from "./containers/AdminPanelContainer";
import {MainPanelContainer} from "./containers/MainPanelContainer";
import {ServicesScreen} from "./pages/services/ServicesScreen";
import {SpecialistsScreen} from "./pages/specialists/SpecialistsScreen";
import {BannersScreen} from "./pages/banners/BannersScreen";
import AppointmentFormScreen from "./pages/appointmentForm/AppointmentFormScreen";
import PrivacyPolicyScreen from "./pages/privacyPolicy/PrivacyPolicyScreen";
import SpecialistScreen from "./pages/specialist/SpecialistScreen";
import DocsScreen from "./pages/docs/DocsScreen";
import {useAuth} from "./utils/hooks/auth.hook";
import {AuthContext} from "./utils/context/AuthContext";
import {Yclient} from "./components/yclient/Yclient";
import {Modal} from "@mui/material";

function App() {
    const {userId, login, logout, ready} = useAuth();
    const isAuthenticated = !!userId;

    // Модалка формы записи
    const location = useLocation();
    const {state} = location;
    const navigate = useNavigate();

    return (
        <AuthContext.Provider value={{userId, login, logout, isAuthenticated}}>
            <ThemeProvider theme={theme}>
                {/*  Админская панель */}
                {ready && isAuthenticated && (
                    <Routes>
                        <Route
                            path={routes.banners}
                            element={<AdminPanelContainer children={<BannersScreen/>}/>}
                        />
                        <Route
                            path={routes.infographics}
                            element={<AdminPanelContainer children={<InfographicsScreen/>}/>}
                        />
                        <Route
                            path={routes.services}
                            element={<AdminPanelContainer children={<ServicesScreen/>}/>}
                        />
                        <Route
                            path={routes.specialists}
                            element={<AdminPanelContainer children={<SpecialistsScreen/>}/>}
                        />
                        <Route path="*" element={<Navigate replace to={routes.infographics}/>}/>
                    </Routes>
                )}
                {/* Пользовательская часть сайта */}
                {ready && !isAuthenticated && (
                    <Routes location={state?.backgroundLocation || location}>
                        <Route
                            path={routes.main}
                            element={<MainPanelContainer children={<MainScreen/>}/>}
                        />
                        <Route
                            path={routes.appointment}
                            element={<MainPanelContainer children={<AppointmentFormScreen/>}/>}
                        />
                        <Route
                            path={routes.privacyPolicy}
                            element={<MainPanelContainer children={<PrivacyPolicyScreen/>}/>}
                        />
                        <Route
                            path={routes.docs}
                            element={<MainPanelContainer children={<DocsScreen/>}/>}
                        />
                        <Route path={routes.authAdmin} element={<AdminLoginScreen/>}/>
                        <Route path="*" element={<Navigate to={"/"}/>}/>
                        <Route path="/specialist-details/:id" element={<SpecialistScreen/>}/>
                    </Routes>
                )}

                {/* Модалка с записью */}
                {state?.backgroundLocation && (
                    <Routes>
                        <Route
                            path="/appointment-button"
                            element={
                                <Modal open={true} onClose={() => navigate(-1)} sx={{
                                    display: 'flex',
                                    alignItems: "center",
                                    justifyContent: 'center',
                                }}>
                                    <Yclient/>
                                </Modal>
                            }
                        />
                    </Routes>
                )}
            </ThemeProvider>
        </AuthContext.Provider>
    );
}

export default App;