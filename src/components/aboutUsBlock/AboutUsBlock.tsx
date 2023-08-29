import React, { useState, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PlacePhoto from '../../assets/content/main/aboutUsBlock/clinic_photo.png'
import Grid from '@mui/material/Grid';

// TODO: Необходимо передавать image (его url или придумать какой-то альтернативный вариант)
interface AboutUsBlockData {
    title: string;
    text: string;
}

const AboutUsBlock: React.FC = () => {
    const [data, setData] = useState<AboutUsBlockData[]>([]);

    useEffect(() => {

        const aboutUsBlockData: AboutUsBlockData[] = [
            { title: 'О нас',
              text: 'Клиника семейной медицины была создана в 2006 году в результате сотрудничества с Арканзасским университетом медицинских наук. Является структурным подразделением ВолгГМУ оказывающим амбулаторную медицинскую помощи для всех желающих. Прием ведут ведущие специалисты медицинского университета.',},
        ];

        setData(aboutUsBlockData);
    }, []);

    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.only('xs'));

    const TitleText = {
        color: '#288e81',
        fontSize: isXsScreen ? 22 : 38,
        fontFamily: 'Austin, sans-serif',
        textTransform: 'uppercase',
        maxWidth: isXsScreen ? 240 : 500,
        textAlign: isXsScreen ? 'center' : 'right',
        marginBottom: '25px',

    }

    const Text = {
        fontSize: isXsScreen ? 16 : 18,
        maxWidth: isXsScreen ? 300 : 500,
        textAlign: isXsScreen ? 'center' : 'right',
        display: 'flex'
    }
    
  return (
    <div style={{padding:'50px 0px'}}>
        <Grid container spacing={5}>
    {isXsScreen ? (
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'relative' }}>
            <Typography sx={TitleText}>{data[0]?.title || ''}</Typography>
            <Typography sx={Text}>{data[0]?.text || ''}</Typography>
            <Box component="img" sx={{ width: "80%", paddingTop:'30px' }} src={PlacePhoto}></Box>
        </Grid>
    ) : (
        <>
            <Grid item xs={12} sm={6} md={6}>
                <Box component="img" sx={{ width: "100%" }} alt='Здание Клиника семейной медицины' src={PlacePhoto}></Box>



            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Typography sx={TitleText}>{data[0]?.title || ''}</Typography>
                <Typography sx={Text}>{data[0]?.text || ''}</Typography>
            </Grid>
        </>
    )}
    </Grid>

        {/* <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={6}>
                <Box component="img" sx={{ width: "100%" }} alt='Здание Клиника семейной медицины' src={PlacePhoto}></Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Typography sx={TitleText}>{data[0]?.title || ''}</Typography>
                <Typography sx={Text}>{data[0]?.text || ''}</Typography>
            </Grid>
        </Grid> */}
        
    </div>
  )
}

export default AboutUsBlock