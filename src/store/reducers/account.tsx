import { IAccount } from "src/interfaces/account.interface";
import * as actionTypes from "../actions";

const initState = {
    accounts: [],
};

export const accountReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case actionTypes.GET_ACCOUNTS: {
            const accounts = action.accounts;
            return {
                ...state,
                accounts,
            };
        }
        case actionTypes.ADD_ACCOUNT: {
            const account = action.account;
            return {
                ...state,
                accounts: [account, ...state.accounts],
            };
        }
        case actionTypes.UPDATE_ACCOUNT: {
            const account = action.account;
            const accounts = state.accounts.reduce(
                (oldVal: IAccount[], newVal: IAccount) => {
                    if (newVal.id !== account.id) {
                        return [...oldVal, newVal];
                    }
                    newVal.title = account.title;
                    return [...oldVal, newVal];
                },
                []
            );
            return {
                ...state,
                accounts,
            };
        }
        case actionTypes.DELETE_ACCOUNT: {
            const accountId = action.id;
            const accounts = state.accounts.filter(
                (acc: IAccount) => acc.id !== accountId
            );
            return {
                ...state,
                accounts,
            };
        }
        default: {
            return state;
        }
    }
};
