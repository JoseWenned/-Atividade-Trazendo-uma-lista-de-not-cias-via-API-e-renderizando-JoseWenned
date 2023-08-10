import axios from "axios";

export const Api = axios.create ({
    baseURL: "https://blog-fake-api.onrender.com",
    timeout: 8 * 1000
})