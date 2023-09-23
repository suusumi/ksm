import ky from "ky";
import { BACKEND_URL } from "../utils/constants/url.constants";

export const HttpClient = ky.extend({
    prefixUrl: BACKEND_URL,
    throwHttpErrors: false,
})