import Button from '@mui/material/Button';
import React from 'react'
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface WelcomePhraseButtonProps {
    slogan: string;
}

const WelcomePhraseButton: React.FC<WelcomePhraseButtonProps> = (props) => {
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));
    return (
        <Button color="primary" sx={{
            color: isXsScreen ? '#288e81' : '#ffffff',
            backgroundColor: '#white',
            border: isXsScreen ? '1px solid #288e81' : '1px solid #ffffff',
            borderRadius: '30px',
            fontSize: '15px',
            textTransform: 'none',
            padding: '8px 20px',
            display: {xs: 'flex', sm: 'none', lg: 'flex'},
            whiteSpace: 'nowrap',
            marginTop:'250px'
        }}>

            {props.slogan}</Button>
    )
}

export default WelcomePhraseButton