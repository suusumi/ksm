import React from "react";
import {
    Box,
    Button,
    CircularProgress,
    Typography,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    TextField
} from "@mui/material";
import Rating from "@mui/material/Rating";
import {AdminReviewsModel} from "../model/AdminReviewsModel";
import {CreateReviewDto, Review} from "../../../api/reviews/dto";

export const AdminReviewsView: React.FC<AdminReviewsModel> = ({
                                                                  reviews,
                                                                  loading,
                                                                  error,
                                                                  onCreateOrUpdate,
                                                                  onDelete,
                                                                  onEdit,
                                                                  onAdd,
                                                                  isDialogOpen,
                                                                  onCloseDialog,
                                                                  currentReview,
                                                              }) => {
    const [localReview, setLocalReview] = React.useState<Review | CreateReviewDto>({
        name: "",
        content: "",
        rating: 5,
    });

    // Максимальное количество символов отзыва в карточке
    const MAX_CONTENT_LENGTH = 390;

    // Обрезка текста в карточке
    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    }

    React.useEffect(() => {
        if (currentReview) {
            setLocalReview(currentReview);
        } else {
            setLocalReview({name: "", content: "", rating: 5});
        }
    }, [currentReview]);

    if (loading) return <CircularProgress/>;
    if (error) return <Typography color="error">{error}</Typography>;

    /* TODO: ограничить количество отображаемых символов
    Все карточки должны быть одного размера */
    return (
        <Box>
            <Button variant="contained" onClick={onAdd}>
                Добавить отзыв
            </Button>
            <Grid container spacing={2} marginTop={2}>
                {reviews.map((review) => (
                    <Grid item xs={12} sm={6} md={4} key={review.id}>
                        <Box border="1px solid #ccc" borderRadius="8px" padding="16px" height='350px'>
                            <Typography variant="h6">{review.name}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {new Date(review.date).toLocaleDateString()}
                            </Typography>
                            <Rating value={review.rating} readOnly/>
                            <Typography>{truncateText(review.content, MAX_CONTENT_LENGTH)}</Typography>
                            <Button color="primary" onClick={() => onEdit(review)}>
                                Редактировать
                            </Button>
                            <Button color="error" onClick={() => onDelete(review.id)}>
                                Удалить
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Dialog open={isDialogOpen} onClose={onCloseDialog}>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Имя"
                        value={localReview.name}
                        onChange={(e) => setLocalReview({...localReview, name: e.target.value})}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Отзыв"
                        value={localReview.content}
                        onChange={(e) => setLocalReview({...localReview, content: e.target.value})}
                        margin="normal"
                        multiline
                        rows={4}
                    />
                    <Rating
                        value={localReview.rating}
                        onChange={(e, newValue) =>
                            setLocalReview({...localReview, rating: newValue || 5})
                        }
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseDialog}>Отмена</Button>
                    <Button
                        onClick={() => onCreateOrUpdate(localReview)}
                        color="primary"
                        variant="contained"
                    >
                        Сохранить
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};
