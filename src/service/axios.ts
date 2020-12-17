import Axios from "axios";

export const axiosServer = Axios.create({
    baseURL: "http://localhost:3000/",
});

export function apiCall() {
    const token = localStorage.getItem("token");

    return Axios.create({
        baseURL: "https://react-app-8c6f2-default-rtdb.firebaseio.com/",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
