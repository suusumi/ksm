import React, { useState, useEffect } from "react";
import { NewPriceProps } from "./NewPriceProps";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  Box,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
import { routes } from "../../assets/routes/routes";

export const NewPriceView: React.FC<NewPriceProps> = (props) => {
  const [openCategories, setOpenCategories] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(-1);

  const handleCategoryClick = (categoryId: number) => {
    if (openCategories.includes(categoryId)) {
      setOpenCategories(openCategories.filter((id) => id !== categoryId));
    } else {
      setOpenCategories([...openCategories, categoryId]);
    }
    setSelectedCategory(categoryId);
  };

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Grid
      container
      direction="column"
      spacing={3}
      pt={1}
      sx={{ marginBottom: isXsScreen ? "20px" : "40px" }}
    >
      <Grid item xs={3} container direction="row" spacing={2}>
        {isXsScreen ? (
          <Grid item paddingTop="14px" sx={{ width: "100%" }}>
            <Select
              value={selectedCategory}
              onChange={(e) => handleCategoryClick(e.target.value as number)}
              sx={{ width: "100%" }}
            >
              {props.categories?.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        ) : (
          props.categories?.map((category) => (
            <Grid item paddingTop="14px" key={"categoryIputText" + category.id}>
              <Button
                variant={
                  category.id === props.idButtonSelection
                    ? "contained"
                    : "outlined"
                }
                size="large"
                onClick={() => {
                  props.handleChoise(category.id);
                  handleCategoryClick(category.id);
                }}
              >
                {category.name}
              </Button>
            </Grid>
          ))
        )}
      </Grid>
      {props.idButtonSelection >= 0 && (
        <Grid
          item
          xs={8}
          container
          direction="column"
          spacing={0}
          margin={0}
          paddingLeft={0}
        >
          {/* Раскрывающийся список */}
          <Grid item xs={9}>
            {props.subcategories
              ?.filter(
                (sub) =>
                  sub.category_id ===
                  (selectedCategory >= 0
                    ? selectedCategory
                    : props.idButtonSelection)
              )
              .map((subcategory) => (
                <Accordion
                  key={"subcategory_" + subcategory.id}
                  sx={{
                    marginBottom: "10px",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    borderBottom: "3px solid #288e81",
                    "&:before": {
                      display: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#288e81" }} />}
                  >
                    <Typography sx={{ fontSize: "20px" }}>
                      {subcategory.name}{" "}
                    </Typography>
                  </AccordionSummary>

                  {/* Список услуг */}
                  <AccordionDetails>
                    {props.services
                      ?.filter(
                        (item) => item.sub_category_id === subcategory.id
                      )
                      .map((service) => (
                        <Box key={"service_" + service.id}>
                          {isXsScreen ? (
                            <Box sx={{ marginBottom: "35px" }}>
                              <Typography variant="h6">
                                {service.name}
                              </Typography>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginTop: "0px",
                                  flexDirection: "column",
                                }}
                              >
                                <Typography variant="body1">
                                  {service.description} |{" "}
                                  <span style={{ fontFamily: "PT-Sans-Bold" }}>
                                    {service.price}Р
                                  </span>
                                </Typography>
                                <a
                                  href={routes.goToAppointment(props.categories?.filter((item) => item.id === selectedCategory).map((category) => category.name)[0], service.name)}
                                  style={{
                                    color: "#288e81",
                                    textDecoration: "none",
                                    marginTop: "5px",
                                  }}
                                >
                                  Записаться
                                </a>
                              </Box>
                            </Box>
                          ) : (
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "20px",
                              }}
                            >
                              <Typography
                                sx={{
                                  maxWidth: "500px",
                                  minWidth: "500px",
                                  fontSize: "18px",
                                  fontWeight: "500",
                                }}
                              >
                                {service.name}
                              </Typography>
                              <Typography
                                variant="body1"
                                sx={{ minWidth: "200px", maxWidth: "200px" }}
                              >
                                {service.description}
                              </Typography>
                              <Typography
                                variant="body1"
                                sx={{ fontWeight: "bold" }}
                              >
                                {service.price}Р
                              </Typography>
                              {/*<a*/}
                              {/*  href={routes.goToAppointment(props.categories?.filter((item) => item.id === selectedCategory).map((category) => category.name)[0], service.name)}*/}
                              {/*  style={{*/}
                              {/*    color: "#288e81",*/}
                              {/*    textDecoration: "none",*/}
                              {/*  }}*/}
                              {/*>*/}
                              {/*  Записаться*/}
                              {/*</a>*/}
                            </Box>
                          )}
                        </Box>
                      ))}
                  </AccordionDetails>
                </Accordion>
              ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
