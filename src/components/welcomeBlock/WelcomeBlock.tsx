import React, { useState, useEffect } from 'react'
import WelcomePhraseButton from '../welcomePhraseButton/WelcomePhraseButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, useTheme } from '@mui/material/styles';

interface WelcomeBlockData {
    title: string;
    subtitle: string;
    slogan: string;
}

const WelcomeBlock: React.FC = () => {
    const [data, setData] = useState<WelcomeBlockData[]>([]);

    useEffect(() => {

        const welcomeBlockData: WelcomeBlockData[] = [
            { title: 'Искусство быть врачом', subtitle: 'Заботимся о вашем здоровье. Индивидуальный подход к каждому пациенту', slogan: 'Здоровье превыше всего!' },
        ];

        setData(welcomeBlockData);
    }, []);

   const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.only('xs'));
    
    const TitleText = {
        color: '#288e81',
        fontSize: isXsScreen ? 30 : 70,
        fontFamily: 'Austin, sans-serif',
        textTransform: 'uppercase',
        maxWidth: 500,
        textAlign: isXsScreen ? 'center' : 'left',

    }

    const SubtitleText = {
        fontSize: 22,
        maxWidth: 500,
    }
    return (
        <div>
            
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={6}>
                    {!isXsScreen && <WelcomePhraseButton slogan={data[0]?.slogan || ''} />}
                    <Typography sx={TitleText}>{data[0]?.title || ''}</Typography>
                    <Typography sx={SubtitleText}>{data[0]?.subtitle || ''}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    
                </Grid>
            </Grid>

        </div>
    )
}

export default WelcomeBlock