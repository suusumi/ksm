import {AboutUs, UpdateAboutUs} from "../../../api/aboutUs/dto";

export interface AdminAboutUsModel {
    aboutUs: AboutUs | null;
    loading: boolean;
    error: string | null;
    onUpdate: (data: UpdateAboutUs) => void;
    onUpdateImage: (file: File) => void;
}
