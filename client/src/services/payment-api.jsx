import axios from "axios";

axios.defaults.withCredentials = true

const api = axios.create({
    baseURL: "http://localhost:8080"
})

export const payment = (body) => {
    const res = api.post("/payment", body)
    return res
}