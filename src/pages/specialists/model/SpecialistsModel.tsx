import { CreateSpecialistDto, SpecialistDto, UpdateSpecialistDto } from "../../../api/specialists/dto";

export interface ISpecialistsView {
    specialists: SpecialistDto[] | undefined,
    createOpen: boolean,
    handleClickCreateOpen: any,
    handleCreateClose: any,
    createSpecialist: CreateSpecialistDto,
    handleChangeNewSpecialistForm: Function,
    selectedImage: File | null,
    setSelectedImage: Function,
    handleCreateSpecialist: Function,
    setValue: Function,
}