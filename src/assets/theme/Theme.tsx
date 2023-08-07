
import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
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
});

export default Theme;