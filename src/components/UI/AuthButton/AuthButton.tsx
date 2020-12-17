import * as React from "react";
import * as css from "./AuthButton.css";
import google from "../../../assets/images/google.png";

const type = {
    Google: google,
};

const AuthButton = (props: any) => (
    <button
        className={`${css.Button} ${css[props.btnType]}`}
        onClick={props.clicked}
    >
        <img
            style={{ width: "30px", marginRight: "10px" }}
            src={type[props.btnType]}
            alt="Google"
        />{" "}
        {props.children}{" "}
    </button>
);

export default AuthButton;
