import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.stackexchange.com/2.3/'
});