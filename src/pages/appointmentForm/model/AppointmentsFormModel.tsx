import { CreateRegistrationDto } from "../../../api/registrations/dto";

export interface AppointmentFormViewProps {
    registrations: CreateRegistrationDto,
    handleRegistrationsChange: Function,
    handleCreateRegistration: any,
    selectedDate: Date | null,
    checked: boolean,
    handleChecked: any,
    errorCheck: string,
    handleChangeDate: any,
    formatDateToString: Function,
    errorMessage: CreateRegistrationDto
}