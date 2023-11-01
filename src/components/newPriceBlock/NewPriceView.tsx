import React, { useState } from "react";
import { NewPriceProps } from "./NewPriceProps";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
  Divider,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const NewPriceView: React.FC<NewPriceProps> = (props) => {
  const [openCategories, setOpenCategories] = useState<number[]>([]);

  const handleCategoryClick = (categoryId: number) => {
    if (openCategories.includes(categoryId)) {
      setOpenCategories(openCategories.filter((id) => id !== categoryId));
    } else {
      setOpenCategories([...openCategories, categoryId]);
    }
  };

  return (
    <Grid container direction={"column"} spacing={3} pt={1}>
      <Grid item xs={3} container direction={"row"} spacing={2}>
        {props.categories?.map((category) => {
          return (
            <Grid
              item
              paddingTop={"14px"}
              key={"categoryIputText" + category.id}
            >
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
          );
        })}
      </Grid>
      {props.idButtonSelection >= 0 && (
        <Grid
          item
          xs={8}
          container
          direction={"column"}
          spacing={2}
          margin={0}
          paddingLeft={0}
        >
          <Grid item xs={3} container direction={"row"} spacing={2}>
            {/* {props.categories
              ?.filter((category) => category.id === props.idButtonSelection)
              .map((category) => (
                <Typography key={"category_" + category.id} marginRight={1}>
                  {category.name}
                </Typography>
              ))} */}
          </Grid>

          <Grid item xs={9}>
            {props.subcategories
              ?.filter((sub) => sub.category_id === props.idButtonSelection)
              .map((subcategory) => {
                return (
                  <Accordion
                    key={"subcategory_" + subcategory.id}
                    sx={{ marginBottom: "10px", backgroundColor: "#F2F2F2" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "#288e81" }} />}
                    >
                      <Typography sx={{ fontSize: "20px" }}>
                        {subcategory.name}{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {props.services
                        ?.filter(
                          (item) => item.sub_category_id === subcategory.id
                        )
                        .map((service) => (
                          <Grid
                            container
                            direction={"row"}
                            key={"service_" + service.id}
                            marginY={"8px"}
                            marginLeft={"12px"}
                            spacing={3}
                          >
                            <Grid item xs={4}>
                              <Typography>{service.name}</Typography>
                            </Grid>

                            <Grid item xs={6}>
                              <Typography>{service.description}</Typography>
                            </Grid>

                            <Grid item xs={2}>
                              <Typography>{service.price + " руб."}</Typography>
                            </Grid>
                          </Grid>
                        ))}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
