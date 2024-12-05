import {AdminDocsModel} from "../model/AdminDocsModel";
import Grid from "@mui/material/Grid";
import theme from "../../../assets/theme/Theme";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import React from "react";
import {DocsDto} from "../../../api/docs/dto";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";

export const AdminDocsView: React.FC<AdminDocsModel> = (props) => {
    return (
        <Grid container direction={'column'} spacing={3}>
            <Grid item xs={1}>
                <Typography
                    style={{font: 'Roboto', fontWeight: '500', fontSize: '24px', color: theme.palette.primary.main,}}>
                    НАСТРОЙКА ДОКУМЕНТОВ
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Button onClick={() => props.handleOpenDialog()}>Создать документ</Button>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {/*<TableCell>№</TableCell>*/}
                                <TableCell>Название</TableCell>
                                <TableCell>Описание</TableCell>
                                <TableCell>Ссылка</TableCell>
                                <TableCell>Редактировать</TableCell>
                                <TableCell>Удалить</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.data?.map((documents: DocsDto) => (
                                <TableRow key={documents.id}
                                          sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                    {/*<TableCell component="th" scope="row">*/}
                                    {/*    {documents.id}*/}
                                    {/*</TableCell>*/}
                                    <TableCell sx={{fontWeight: 'bold'}}>{documents.name}</TableCell>
                                    <TableCell>{documents.description}</TableCell>
                                    <TableCell>
                                        <a href={documents.file_name}
                                           target='_blank' rel="noreferrer">{documents.file_name}
                                        </a>
                                    </TableCell>
                                    <TableCell align={'center'}>
                                        <EditIcon
                                            sx={{cursor: 'pointer', color: '#288e81'}}
                                            onClick={() => props.handleOpenDialog(documents)}
                                        />
                                    </TableCell>
                                    <TableCell align={'center'}>
                                        <DeleteIcon
                                            sx={{cursor: 'pointer', color: '#288e81'}}
                                            onClick={() => props.handleDeleteIconClick(documents)}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </Grid>
    );
};
