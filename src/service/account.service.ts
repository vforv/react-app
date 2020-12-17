import { IAccount } from "src/interfaces/account.interface";
import { apiCall } from "./axios";

export class AccountService {
    public token = localStorage.getItem("token");
    public async create(account: IAccount) {
        return apiCall().post(`/account.json`, account);
    }

    public async read() {
        return apiCall().get("/account.json");
    }

    public async update(data: any) {
        return apiCall().patch(`/account/${data.id}.json`, data);
    }

    public async delete(id: string) {
        return apiCall().delete(`/account/${id}.json`);
    }
}
