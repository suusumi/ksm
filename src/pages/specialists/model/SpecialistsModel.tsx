import { CreateSpecialistDto, SpecialistDto } from "../../../api/specialists/dto";

export interface ISpecialistsView {
    specialists: SpecialistDto[] | undefined,
    open: boolean,
    handleClickOpen: any,
    handleClose: any,
    createSpecialist: CreateSpecialistDto,
    handleChangeSpecialistForm: Function,
    selectedImage: File | null,
    setSelectedImage: Function,
    handleCreateSpecialist: Function,
}