export type DocsDto = {
    id: number;
    name: string;
    description: string;
    file_name: string;
}

export type CreateDocDto = {
    id?: number;
    name: string;
    description: string;
    file_name: string;
}