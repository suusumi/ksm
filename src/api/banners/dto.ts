export type BannersDto = {
    id: number,
    title: string,
    subtitle: string,
    text_content: string,
    img_path: string,
}

export type CreateBannersDto = {
    title: string,
    subtitle: string,
    text_content: string,
    img_path: string
}