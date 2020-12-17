import * as React from "react";
import Button from "src/components/UI/Button/Button";
import Input from "src/components/UI/Input/Input";
import * as css from "./AccountItem.css";

class AccountItem extends React.Component<any> {
    public state = {
        isHidden: true,
        isEditForm: false,
        accountForm: {
            title: {
                elementType: "input",
                label: "Account title",
                elementConfig: {
                    type: "text",
                    placeholder: "Account title",
                },
                value: null,
            },
        },
    };

    public viewHideItem = () => {
        const newState = !this.state.isHidden;
        this.setState({ isHidden: newState });
    };

    public openEditForm = () => {
        this.setState({ isEditForm: true });
    };

    public updateAccount = () => {
        const { value } = this.state.accountForm.title;
        this.props.onUpdate({
            id: this.props.item.id,
            title: value || this.props.item.title,
        });
        this.setState({ isEditForm: false });
    };

    public deleteAccount = () => {
        this.props.onDelete({
            id: this.props.item.id,
        });
    };

    public inputChangedHandler = (event: any, inputIdentifier: any) => {
        const value = event.target.value;
        this.setState({
            accountForm: {
                title: {
                    value,
                },
            },
        });
    };

    public render() {
        return (
            <div className={css.AccountItem}>
                <div className="row">
                    <div className="col-4">
                        <p>
                            <strong>Title</strong>
                        </p>
                        <p>{this.props.item.title}</p>
                    </div>
                    <div className="col-4">
                        <p>
                            <strong>Country</strong>
                        </p>
                        <p>{this.props.item.country}</p>
                    </div>
                    <div className="col-4">
                        <p>
                            <strong>Account Type</strong>
                        </p>
                        <p>{this.props.item.accountType}</p>
                    </div>
                    {!this.state.isHidden ? (
                        <div className="col-12">
                            <div className="row">
                                <div className="col-4">
                                    <p>
                                        <strong>Interests</strong>
                                    </p>
                                    <p>{this.props.item.interests}</p>
                                </div>
                                <div className="col-8">
                                    <p>
                                        <strong>Additional Informations</strong>
                                    </p>
                                    <p>
                                        {this.props.item.additionalInformations}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}

                    {!this.state.isEditForm ? (
                        <div className="col-12">
                            <div className="row">
                                <div className="col-4">
                                    <Button
                                        clicked={this.openEditForm}
                                        btnType="Success"
                                    >
                                        Edit Title
                                    </Button>
                                </div>
                                <div className="col-4">
                                    {!this.state.isHidden ? (
                                        <Button
                                            clicked={this.viewHideItem}
                                            btnType="Danger"
                                        >
                                            Hide Details
                                        </Button>
                                    ) : (
                                        <Button
                                            clicked={this.viewHideItem}
                                            btnType="Success"
                                        >
                                            View All Details
                                        </Button>
                                    )}
                                </div>
                                <div className="col-4">
                                    <Button
                                        clicked={this.deleteAccount}
                                        btnType="Danger"
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="col-12">
                            <div className="row">
                                <div className="col-9">
                                    <Input
                                        label="Change title"
                                        key={this.props.item.id}
                                        elementType={
                                            this.state.accountForm.title
                                                .elementType
                                        }
                                        elementConfig={
                                            this.state.accountForm.title
                                                .elementConfig
                                        }
                                        value={
                                            this.state.accountForm.title
                                                .value || this.props.item.title
                                        }
                                        changed={(event: any) =>
                                            this.inputChangedHandler(
                                                event,
                                                this.props.item.id
                                            )
                                        }
                                    />
                                </div>
                                <div className="col-3">
                                    <Button
                                        clicked={this.updateAccount}
                                        btnType="Danger"
                                    >
                                        Update
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default AccountItem;
