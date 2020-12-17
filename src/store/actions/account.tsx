import { IAccount } from "../../interfaces/account.interface";
import { AccountService } from "../../service/account.service";
import to from "await-to-js";
import * as actionTypes from "./actionTypes";

export const getAccounts = (accounts: IAccount[]) => {
    return {
        type: actionTypes.GET_ACCOUNTS,
        accounts,
    };
};

export const addAccount = (account: IAccount) => {
    return {
        type: actionTypes.ADD_ACCOUNT,
        account,
    };
};

export const updateAccount = (accountData: { title: string; id: string }) => {
    return {
        type: actionTypes.UPDATE_ACCOUNT,
        account: accountData,
    };
};

export const deleteAccount = (id: string) => {
    return {
        type: actionTypes.DELETE_ACCOUNT,
        id,
    };
};

export const initAccounts = () => {
    return async (dispatch: any) => {
        const accountService = new AccountService();

        const [err, accountsData]: any = await to(accountService.read());
        if (!accountsData || !accountsData.data) {
            return;
        }
        if (!err) {
            const formatedOrders: IAccount[] = Object.keys(
                accountsData.data
            ).map((order: any) => {
                return {
                    ...accountsData.data[order],
                    id: order,
                };
            });
            return dispatch(getAccounts(formatedOrders));
        }

        // handler error
        console.log(err);
    };
};

export const createAccounts = (account: IAccount) => {
    return async (dispatch: any) => {
        const accountService = new AccountService();

        const [err, accountsData]: any = await to(
            accountService.create(account)
        );

        if (!err) {
            console.log(accountsData.data);
            return dispatch(
                addAccount({
                    ...account,
                    id: accountsData.data.name,
                })
            );
        }

        // handler error
        console.log(err);
    };
};

export const editAccount = (account: { title: string; id: string }) => {
    return async (dispatch: any) => {
        const accountService = new AccountService();

        const [err, accountsData]: any = await to(
            accountService.update(account)
        );

        if (!err) {
            console.log(accountsData.data);
            return dispatch(updateAccount(account));
        }

        // handler error
        console.log(err);
    };
};

export const deleteAccounts = (id: string) => {
    return async (dispatch: any) => {
        const accountService = new AccountService();

        const [err, accountsData]: any = await to(accountService.delete(id));

        if (!err) {
            console.log(accountsData.data);
            return dispatch(deleteAccount(id));
        }

        // handler error
        console.log(err);
    };
};
