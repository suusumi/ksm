import { CreateRegistrationDto } from "./dto";

export const createRegistation = async (dto: CreateRegistrationDto): Promise<Response> => {
    try {
        const responce = await fetch(
            "http://feedback.visdom.tech/api/v1/registrations/registration",
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dto),
            })

        if (responce.ok) {
            return responce;
        } else {
            throw new Error('Ошибка в получении всех баннеров: ' + responce.statusText);
        }
    } catch (error) {
        throw new Error('Ошибка' + error);
    }
}