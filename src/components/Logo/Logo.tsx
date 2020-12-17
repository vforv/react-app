import * as React from "react";
import * as css from "./Logo.css";
import logo from "../../assets/images/logo.jpg";

const Logo = (props: any) => (
    <div className={css.Logo} style={{ height: props.height }}>
        <img src={logo} alt="My React App" />
    </div>
);

export default Logo;
