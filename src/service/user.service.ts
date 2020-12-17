import { axiosServer } from "./axios";

export class UserService {
    public async getToken(gToken: string) {
        return axiosServer.get(`/token/${gToken}`).then((data) => {
            console.log(data);
            localStorage.setItem("token", data.data.token);
            localStorage.setItem(
                "user",
                JSON.stringify({ name: data.data.user.name })
            );
            return data;
        });
    }

    public getUser() {
        const user = localStorage.getItem("user");

        if (!user) {
            return null;
        }

        return JSON.parse(user);
    }
}
