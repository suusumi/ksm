import React from "react";
import { HeaderAdmin } from "../components/header/HeaderAdmin";
import { Grid } from "@mui/material";

interface IAdminPanelContainer {
    children: JSX.Element
}

export const AdminPanelContainer: React.FC<IAdminPanelContainer> = ({ children }) => {
    return (<Grid container direction={'column'} spacing={5}>
        <Grid item>
            <HeaderAdmin />
        </Grid>

        <Grid item>
            {children}
        </Grid>
    </Grid>
    );
}