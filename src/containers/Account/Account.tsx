import * as React from "react";
import { connect } from "react-redux";
import AccountList from "src/components/AccountList/AccountList";
import { UserService } from "src/service/user.service";
import AccountForm from "../../components/AccountForm/AccountForm";
import Box from "../../components/UI/Box/Box";
import { IAccount } from "../../interfaces/account.interface";
import * as store from "../../store";

class Account extends React.Component<any> {
    public state = {
        user: null,
    };
    public async componentDidMount() {
        this.props.onInitAccounts();
        const userService = new UserService();
        const user = userService.getUser();

        if (!user) {
            this.props.history.push("/");
        }

        this.setState({
            user: user.name,
        });
    }
    public addAccount = (data: IAccount) => {
        this.props.onAddAccount(data);
    };

    public deleteAccount = (data: { id: string }) => {
        this.props.onDeleteAccount(data.id);
    };

    public updateAccount = (data: { id: string; title: string }) => {
        this.props.onUpdateAccount(data);
    };
    public render() {
        return (
            <div className="container">
                <h1
                    style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                    }}
                >
                    Welcome {this.state.user}
                </h1>
                <div className="row">
                    <div className="col-6">
                        <Box boxTitle="Create Account">
                            <AccountForm onFormSubmit={this.addAccount} />
                        </Box>
                    </div>
                    <div className="col-6">
                        <Box boxTitle="Accounts List">
                            <AccountList
                                onDelete={this.deleteAccount}
                                onUpdate={this.updateAccount}
                                accounts={this.props.accounts}
                            />
                        </Box>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        accounts: state.accounts.accounts,
    };
};

const mapDispathcToProps = (dispatch: any) => {
    return {
        onInitAccounts: () => dispatch(store.initAccounts()),
        onAddAccount: (account: IAccount) =>
            dispatch(store.createAccounts(account)),
        onUpdateAccount: (account: { id: string; title: string }) =>
            dispatch(store.editAccount(account)),
        onDeleteAccount: (id: string) => dispatch(store.deleteAccounts(id)),
    };
};

export default connect(mapStateToProps, mapDispathcToProps)(Account);
