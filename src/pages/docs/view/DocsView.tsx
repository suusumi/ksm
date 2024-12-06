import {CircularProgress, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {DocModel} from "../model/DocsModel";
import {DocsDto} from "../../../api/docs/dto";

interface DocsViewProps {
    documents: DocsDto[];
    loading: boolean;
    error: string | null;
}

export const DocsView: React.FC<DocsViewProps> = ({documents, loading, error}) => {
    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));

    const styles = {
        titleBlock: {
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            maxWidth: "640px",
            padding: "0",
            marginBottom: isMdScreen ? "45px" : "90px",
            paddingTop: isSmScreen ? "45px" : "0px",
        },
        titleText: {
            marginBottom: isMdScreen ? "20px" : "40px",
            fontSize: isSmScreen ? "30px" : isLgScreen ? "38px" : "42px",
            lineHeight: "1.23",
            fontFamily: "Austin, Arial, sans-serif",
            fontWeight: "600",
            color: "rgb(8, 142, 129)",
        },
        titleSubText: {
            maxWidth: "560px",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: isSmScreen ? "20px" : isLgScreen ? "22px" : "24px",
            lineHeight: isSmScreen ? "1.4" : "1.5",
            fontFamily: "PT Sans",
            fontWeight: "300",
            color: "black",
        },
        listCards: {
            marginBottom: 0,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 0,
            maxWidth: isMdScreen ? "640px" : isLgScreen ? "960px" : "1200px",
        },
        cardItem: {
            cursor: "pointer",
            display: "inline",
            marginX: isLgScreen ? "10px" : "20px",
            maxWidth: isMdScreen ? "100%" : "240px",
            backgroundColor: "white",
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 0px",
            height: isMdScreen ? "auto" : "253px",
            width: isMdScreen ? "auto" : "100%",
        },
        card: {
            padding: "30px 30px 40px",
        },
        cardTitle: {
            fontSize: isLgScreen ? "20px" : "22px",
            lineHeight: "1.35",
            fontFamily: "PT Sans",
            fontWeight: "600",
            color: "black",
        },
        cardButton: {
            width: "100%",
            marginTop: "10px",
            display: "inline-block",
            color: "#ff8562",
            fontFamily: "PT Sans",
            fontSize: "16px",
            lineHeight: "1.55",
            fontWeight: "700",
            textDecoration: "none",
        },
    };

    if (loading) {
        return (
            <div style={{textAlign: "center", marginTop: '50px'}}>
                <CircularProgress/>
            </div>
        )
    }

    if (error) {
        return (
            <div style={{textAlign: "center", marginTop: '50px'}}>
                <Typography color='error'>{error}</Typography>
            </div>
        )
    }

    return (
        <div style={{marginBottom: "60px"}}>
            <div style={styles.titleBlock}>
                <Typography textAlign={"center"} style={styles.titleText}>
                    Документы и важная информация
                </Typography>

                <Typography textAlign={"center"} style={styles.titleSubText}>
                    Для уточнения другой информации звоните в регистратуру <br/> 97-12-12
                </Typography>
            </div>

            <Stack
                direction={isMdScreen ? "column" : "row"}
                justifyContent={"center"}
                spacing={isMdScreen ? 2 : 2}
                useFlexGap
                flexWrap={"wrap"}
                style={styles.listCards}
                flexGrow={1}
            >
                {documents.map((item) => (
                    <div style={styles.cardItem}>
                        <div style={styles.card}>
                            <Typography style={styles.cardTitle}>{item.name}</Typography>
                            <Typography style={styles.cardButton}>
                                <a style={styles.cardButton} href={item.file_name} target="_blank" rel="noopener noreferrer">
                                    {"Перейти →"}
                                </a>
                            </Typography>
                        </div>
                    </div>
                ))}
            </Stack>
        </div>
    );
}
