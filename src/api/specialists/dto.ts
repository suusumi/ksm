export type SpecialistDto = {
    id: number,
    photoPath: string,
    name: string,
    post: string,
    speciality: string,
    degree: string,
}

export type CreateSpecialistDto = {
    name: string,
    post: string,
    speciality: string,
    degree: string
}

export type UpdateSpecialistDto = {
    name: string,
    post: string,
    speciality: string,
    degree: string
}