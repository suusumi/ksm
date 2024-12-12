import React from "react";
import { Box, Grid, CircularProgress, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Review } from "../../../api/reviews/dto";

interface ReviewsViewProps {
    reviews: Review[];
    loading: boolean;
    error: string | null;
}

export const ReviewsBlockView: React.FC<ReviewsViewProps> = ({
                                                            reviews,
                                                            loading,
                                                            error,
                                                        }) => {
    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <Box padding={4}>
            <Typography variant="h4" marginBottom={4}>
                Отзывы наших клиентов
            </Typography>
            <Grid container spacing={2}>
                {reviews.map((review) => (
                    <Grid item xs={12} sm={6} md={4} key={review.id}>
                        <Box
                            border="1px solid #ccc"
                            borderRadius="8px"
                            padding="16px"
                            height="310px"
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                        >
                            <Typography variant="h6">{review.name}</Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                marginBottom={1}
                            >
                                {new Date(review.date).toLocaleDateString()}
                            </Typography>
                            <Rating value={review.rating} readOnly />
                            <Typography variant="body1" marginTop={2}>
                                {review.content}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
