import React from "react";
import { ServicesViewProps } from "../model/ServicesModel";
import { Button, Grid, TextField, Typography } from "@mui/material";
import theme from "../../../assets/theme/Theme";


const styles = {
  textHeader: {
    font: "Roboto",
    fontWeight: "500",
    fontSize: "24px",
    color: theme.palette.primary.main,
  },
  textCategoryTitle: {
    font: "PT Sans",
    fontWeight: "500",
    fontSize: "20px",
    color: "#000",
  },
};

export const ServicesView: React.FC<ServicesViewProps> = (props) => {
  return (
    <Grid container direction={"column"} spacing={3} pt={1}>
      <Grid item xs={1}>
        <Typography style={styles.textHeader}>НАСТРОЙКА УСЛУГ</Typography>
      </Grid>

      <Grid item xs={3} container direction={"row"} spacing={2}>
        {props.categories?.map((category) => {
          return (
            <Grid item paddingTop={"14px"} key={"categoryIputText" + category.id}>
              <Button
                variant={
                  category.id === props.idButtonSelection
                    ? "contained"
                    : "outlined"
                }
                size="large"
                onClick={() => props.handleChoise(category.id)}
              >
                {category.name}
              </Button>
            </Grid>
          );
        })}

        <Grid item paddingTop={"14px"}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              props.handleCreateCategory();
              console.log("ADD CLICK!");
            }}
          >
            +
          </Button>
        </Grid>
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
          <Grid item xs={3} container direction={"row"} spacing={3}>
            {!props.isOpenChangeCategory && (
              <>
                <Typography style={styles.textHeader}>
                  {props.categories
                    ?.filter(
                      (category) => category.id === props.idButtonSelection
                    )
                    .map((category) => category.name)}
                </Typography>
                <Button onClick={() => props.openFormChangeCategory()}>
                  Изменить
                </Button>
              </>
            )}
            {props.isOpenChangeCategory && (
              <>
                <TextField
                  id="categoryIputText"
                  variant="outlined"
                  label="Введите наименование категории"
                  value={props.newCategory.name}
                  onChange={(event) =>
                    props.handleChangeCategory(event)
                  }
                />
                <Button onClick={() => props.handleUpdateCategory(props.idButtonSelection)}>
                  Сохранить
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
