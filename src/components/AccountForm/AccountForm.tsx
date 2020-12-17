import * as React from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import classes from "./AccountForm.css";

class AccountForm extends React.Component<any> {
    public state = {
        accountForm: {
            title: {
                elementType: "input",
                label: "Account title",
                elementConfig: {
                    type: "text",
                    placeholder: "Account title",
                },
                value: "",
            },
            country: {
                elementType: "input",
                label: "Country",
                elementConfig: {
                    type: "text",
                    placeholder: "Country",
                },
                value: "",
            },
            additionalInformations: {
                elementType: "textarea",
                label: "Additional Informations",
                elementConfig: {
                    placeholder: "Some additional informations about account",
                },
                value: "",
            },
            accountType: {
                elementType: "select",
                label: "Account Type",
                elementConfig: {
                    options: [
                        { value: "individual", displayValue: "Individual" },
                        { value: "company", displayValue: "Comapny" },
                    ],
                },
                value: "",
            },
            interests: {
                elementType: "select",
                label: "Interest",
                elementConfig: {
                    options: [
                        { value: "programming", displayValue: "Programming" },
                        { value: "design", displayValue: "Design" },
                        { value: "devops", displayValue: "DevOps" },
                    ],
                },
                value: "",
            },
        },
        loading: false,
    };
    public orderHandler = (event: any) => {
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for (const formElementIdentifier in this.state.accountForm) {
            if (this.state.accountForm.hasOwnProperty(formElementIdentifier)) {
                formData[formElementIdentifier] = this.state.accountForm[
                    formElementIdentifier
                ].value;
            }
        }
        this.props.onFormSubmit(formData);
    };

    public inputChangedHandler = (event: any, inputIdentifier: any) => {
        const updatedaccountForm = {
            ...this.state.accountForm,
        };
        const updatedFormElement = {
            ...updatedaccountForm[inputIdentifier],
        };
        updatedFormElement.value = event.target.value;
        updatedaccountForm[inputIdentifier] = updatedFormElement;
        this.setState({ accountForm: updatedaccountForm });
    };
    public render() {
        const formElementsArray = [];
        for (const key in this.state.accountForm) {
            if (this.state.accountForm.hasOwnProperty(key)) {
                formElementsArray.push({
                    id: key,
                    config: this.state.accountForm[key],
                });
            }
        }
        const form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map((formElement) => (
                    <Input
                        label={formElement.config.label}
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event: any) =>
                            this.inputChangedHandler(event, formElement.id)
                        }
                    />
                ))}
                <Button btnType="Success">CREATE</Button>
            </form>
        );
        return <div className={classes.AccountData}>{form}</div>;
    }
}

export default AccountForm;
