import React, {useState, useEffect} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {fetchAboutUs} from "../../api/aboutUs/request";
import {AboutUs} from "../../api/aboutUs/dto";

interface AboutUsBlockProps {
    id: string;
}

/**
 * Компонент, отображающий блок "О нас".
 *
 * @param {AboutUsBlockProps} id - Идентификатор для корректной навигации в шапке.
 * @return {ReactElement} Отрисованный компонент AboutUsBlock
 */
const AboutUsBlock: React.FC<AboutUsBlockProps> = ({id}) => {
    const [aboutUs, setAboutUs] = useState<AboutUs | null>(null); // Состояние для данных "О нас"
    const [error, setError] = useState<string | null>(null); // Состояние для ошибки

    useEffect(() => {
        const loadAboutUsData = async () => {
            try {
                const data = await fetchAboutUs(); // Загружаем данные
                setAboutUs(data);
            } catch (err) {
                console.error("Ошибка загрузки данных 'О нас':", err);
                setError("Не удалось загрузить данные. Попробуйте позже.");
            }
        };

        loadAboutUsData();
    }, []);

    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

    const TitleText = {
        color: "#288e81",
        fontSize: isXsScreen ? 22 : 38,
        fontFamily: "Austin, sans-serif",
        textTransform: "uppercase",
        maxWidth: isXsScreen ? 240 : 500,
        textAlign: isXsScreen ? "center" : "right",
        marginBottom: "25px",
    };

    const Text = {
        fontSize: isXsScreen ? 16 : 18,
        maxWidth: isXsScreen ? 300 : 500,
        textAlign: isXsScreen ? "center" : "right",
        display: "flex",
    };

    if (error) {
        return (
            <div id={id} style={{padding: "50px 0px", textAlign: "center"}}>
                <Typography color="error">{error}</Typography>
            </div>
        );
    }

    return (
        <div id={id} style={{padding: "50px 0px"}}>
            <Grid container spacing={5}>
                {isXsScreen ? (
                    <Grid
                        item
                        xs={12}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            position: "relative",
                        }}
                    >
                        <Typography sx={TitleText}>О нас</Typography>
                        <Typography sx={Text}>{aboutUs?.content || ""}</Typography>
                        {aboutUs?.imageUrl && (
                            <Box
                                component="img"
                                sx={{width: "80%", paddingTop: "30px", borderRadius:"15px"}}
                                src={`http://localhost:8081/images/${aboutUs.imageUrl}`}
                                alt="Фото клиники"
                            ></Box>
                        )}
                    </Grid>
                ) : (
                    <>
                        <Grid item xs={12} sm={6} md={6}>
                            {aboutUs?.imageUrl && (
                                <Box
                                    component="img"
                                    sx={{width: "100%", borderRadius:"15px"}}
                                    alt="Фотография Клиники семейной медицины"
                                    src={`http://localhost:8081/images/${aboutUs.imageUrl}`}
                                ></Box>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography sx={TitleText}>О нас</Typography>
                            <Typography sx={Text}>{aboutUs?.content || ""}</Typography>
                        </Grid>
                    </>
                )}
            </Grid>
        </div>
    );
};

export default AboutUsBlock;
