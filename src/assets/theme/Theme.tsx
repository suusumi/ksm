
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
        'PT-Sans',   // Имя шрифта для обычного текста
        'Austin',    // Имя шрифта для заголовков
        'sans-serif',
    ].join(','),
    h6: {
      fontSize: '16px', // Значение размера шрифта для h6
    },
  },
  palette: {
    primary: {
      main: '#288E81',
      dark: '#1C635A',
    },
    secondary: {
      main: '#E5C78C',
    },
    background: {
      paper: 'white'
    }
  }
});

export default theme;