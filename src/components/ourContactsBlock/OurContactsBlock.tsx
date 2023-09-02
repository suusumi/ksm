import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import OutlineButton from '../outlineButton/OutlineButton';

interface SocialLink {
  name: string;
  url: string;
}

interface OurContactsBlockData {
  phones: string[]; // Массив номеров
  mails: string[]; // Массив почтовых адресов
  socialLinks: SocialLink[]; // Массив ссылок на социальные сети
  address: string;
}

const OurContactsBlock: React.FC = () => {
  const [data, setData] = useState<OurContactsBlockData[]>([]);

  useEffect(() => {

        const ourContactsBlockData: OurContactsBlockData[] = [
            { phones: ['(8442)971212', '8(937)0971212'],
              mails: ['ksm@Volgmed.ru', 'ksm@Volgmed.ru2'],
              socialLinks: [
                {
                  name: 'Telegram',
                  url: 'https://t.me/volggmu_vuz'
                },
                {
                  name: 'Whatsapp',
                  url: 'https://wa.me/79370971212',
                },
                {
                  name: 'VK',
                  url: 'https://vk.com/ksm_voggmu',
                },
                {
                  name: 'Email',
                  url: 'ksm@Volgmed.ru',
                },
              ],
              address: 'ул. КИМ, 20, 400001, Волгоград' },
        ];

        setData(ourContactsBlockData);
    }, []);

    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.only('xs'));

    const TitleText = {
        color: '#288e81',
        fontSize: isXsScreen ? 22 : 38,
        fontFamily: 'Austin, sans-serif',
        textTransform: 'uppercase',
        maxWidth: isXsScreen ? 500 : 500,
        textAlign: isXsScreen ? 'center' : 'left',
        marginBottom: '25px',
    }

    

  return (
    <div style={{ padding: '20px 0px' }}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={6} sx={{ textAlign: isXsScreen ? 'center' : 'left' }}>
          <Typography sx={TitleText}>Наши контакты</Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '20px' }}>
            {data &&
              data.map((item, index) => (
                <div key={`contact-${index}`}>
                  {item.phones.map((phone, phoneIndex) => (
                    <OutlineButton
                      key={`phone-${phoneIndex}`}
                      buttonText={`${phone}`}
                      buttonLink={`tel:${phone}`}
                    />
                  ))}
                </div>
              ))}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ textAlign: isXsScreen ? 'center' : 'left' }}>
          <Typography sx={TitleText}>Социальные сети</Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '20px' }}>
            {data &&
              data.map((item, index) => (
                <div key={`social-${index}`}>
                  {item.socialLinks.map((socialLink, socialIndex) => (
                    <OutlineButton
                      key={`social-${socialIndex}`}
                      buttonText={socialLink.name}
                      buttonLink={socialLink.url}
                    />
                  ))}
                </div>
              ))}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ textAlign: isXsScreen ? 'center' : 'left' }}>
          <Typography sx={TitleText}>Адрес</Typography>
          <OutlineButton buttonText={data.length > 0 ? data[0].address : ''} buttonLink="https://yandex.ru/maps/-/CDQ0vANl" />
        </Grid>
      </Grid>
    </div>
  );
}

export default OurContactsBlock;
