export interface Review {
    id: number;
    name: string;
    content: string;
    rating: number;
    date: string;
}

export interface CreateReviewDto {
    name: string;
    content: string;
    rating: number;
    date?: string;
}

export interface UpdateReviewDto {
    name?: string;
    content?: string;
    rating?: number;
    date?: string;
}