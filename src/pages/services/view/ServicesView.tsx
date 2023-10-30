import React from "react";
import { ServicesViewProps } from "../model/ServicesModel";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import theme from "../../../assets/theme/Theme";
import {
  ChangingButtons,
  ChangingButtonsEdit,
} from "../../../components/ChangingButtonGroup/ChangingButtonsGroup";

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
            onClick={() => props.handleCreateCategory()}
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
          <Grid item xs={3} container direction={"row"} spacing={2}>
            {!props.isOpenChangeCategory && (
              <>
                <Typography style={styles.textHeader} marginRight={1}>
                  {props.categories
                    ?.filter(
                      (category) => category.id === props.idButtonSelection
                    )
                    .map((category) => category.name)}
                </Typography>
                <ChangingButtons
                  id={props.idButtonSelection}
                  handleOpen={props.openFormChangeCategory}
                  handleDelete={props.handleDeleteCategory}
                />
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => props.handleCreateSubcategory()}
                >
                  Добавить подкатегорию
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
                  onChange={(event) => props.handleChangeCategory(event)}
                  sx={{ marginRight: 1 }}
                />
                <ChangingButtonsEdit
                  id={props.idButtonSelection}
                  handleUpdate={props.handleUpdateCategory}
                  handleClose={props.openFormChangeCategory}
                />
              </>
            )}
          </Grid>

          <Grid item xs={9}>
            {props.subcategories
              ?.filter((sub) => sub.category_id === props.idButtonSelection)
              ?.map((subcategory) => {
                return (
                  <div key={"subcategory_" + subcategory.id}>
                    <Grid container direction={"row"}>
                      {props.idChangeSubcategory !== subcategory.id && (
                        <>
                          <Typography
                            style={styles.textCategoryTitle}
                            marginRight={2}
                          >
                            {subcategory.name}
                          </Typography>
                          <ChangingButtons
                            id={subcategory.id}
                            handleOpen={props.openFormChangeSubcategory}
                            handleDelete={props.handleDeleteSubcategory}
                          />
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => props.handleCreateServise(subcategory.id)}
                          >
                            Добавить услугу
                          </Button>
                        </>
                      )}
                      {props.idChangeSubcategory === subcategory.id && (
                        <>
                          <TextField
                            id="subcategoryInputText"
                            variant="outlined"
                            label="Введите наименование подкатегории"
                            value={props.newSubcategory.name}
                            onChange={(event) =>
                              props.handleChangeSubcategory(event)
                            }
                            sx={{ marginRight: 1 }}
                          />
                          <ChangingButtonsEdit
                            id={subcategory.id}
                            handleUpdate={props.handleUpdateSubcategory}
                            handleClose={props.openFormChangeSubcategory}
                          />
                        </>
                      )}
                    </Grid>
                      <Divider />

                    {props.services
                      ?.filter(
                        (item) => item.sub_category_id === subcategory.id
                      )
                      ?.map((service) => {
                        return (
                          <Grid
                            container
                            direction={"row"}
                            key={"service_" + service.id}
                            marginY={"8px"}
                            marginLeft={"12px"}
                            spacing={3}
                          >
                            {props.idChangeService !== service.id && (
                              <>
                                <Grid item xs={4}>
                                  <Typography>{service.name}</Typography>
                                </Grid>

                                <Grid item xs={4}>
                                  <Typography>{service.description}</Typography>
                                </Grid>

                                <Grid item xs={2}>
                                  <Typography>{service.price + ' руб.'}</Typography>
                                </Grid>

                                <Grid item xs={2}>
                                  <ChangingButtons
                                    id={service.id}
                                    handleOpen={props.openFormChangeServise}
                                    handleDelete={props.handleDeleteService}
                                  />
                                </Grid>
                              </>
                            )}
                            {props.idChangeService === service.id && (
                              <>
                                <Grid item xs={4}>
                                  <TextField
                                    id="serviceNameInputText"
                                    variant="outlined"
                                    label="Введите наименование услуги"
                                    fullWidth
                                    value={props.newService.name}
                                    onChange={(event) =>
                                      props.handleChangeService(event, "name")
                                    }
                                  />
                                </Grid>

                                <Grid item xs={4}>
                                  <TextField
                                    id="serviceDescriptionInputText"
                                    variant="outlined"
                                    label="Введите описание услуги"
                                    fullWidth
                                    value={props.newService.description}
                                    onChange={(event) =>
                                      props.handleChangeService(
                                        event,
                                        "description"
                                      )
                                    }
                                  />
                                </Grid>

                                <Grid item xs={2}>
                                  <TextField
                                    id="servicePriceInputText"
                                    type="number"
                                    variant="outlined"
                                    label="Введите цену услуги"
                                    fullWidth
                                    value={props.newService.price}
                                    onChange={(event) =>
                                      props.handleChangeService(event, "price")
                                    }
                                  />
                                </Grid>

                                <Grid item xs={2}>
                                  <ChangingButtonsEdit
                                    id={service.id}
                                    handleUpdate={props.handleUpdateService}
                                    handleClose={props.openFormChangeServise}
                                  />
                                </Grid>
                              </>
                            )}
                          </Grid>
                        );
                      })}
                  </div>
                );
              })}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
