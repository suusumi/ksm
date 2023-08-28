import { Typography, TypographyProps } from "@mui/material";
import theme from "../../assets/theme/Theme";
import { styled } from "@mui/material/styles";

export const WarningParagraph = styled(Typography)<TypographyProps>(() => ({
    color: theme.palette.warning.main,
    fontSize: 14,
    fontWeight: 500
}))