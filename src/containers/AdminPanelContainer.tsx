import React from "react";
import { HeaderAdmin } from "../components/header/HeaderAdmin";
import { Container } from "@mui/material";

interface IAdminPanelContainer {
    children: JSX.Element
}

export const AdminPanelContainer: React.FC<IAdminPanelContainer> = ({ children }) => {
    return (
    <Container>
        <HeaderAdmin/>
        {children}
    </Container>
    );
}