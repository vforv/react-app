import * as React from "react";
import { IAccount } from "src/interfaces/account.interface";
import AccountItem from "./AccountItem/AccountItem";
class AccountList extends React.Component<any> {
    public render() {
        return (
            <div>
                {this.props.accounts.map((account: IAccount) => {
                    return (
                        <AccountItem
                            onUpdate={this.props.onUpdate}
                            onDelete={this.props.onDelete}
                            key={account.id}
                            item={account}
                        />
                    );
                })}
            </div>
        );
    }
}

export default AccountList;
