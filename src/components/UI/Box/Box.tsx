import * as React from "react";
import * as css from "./Box.css";

const Box = (props: any) => (
    <div className={css.boxBorder}>
        <div className={css.boxHead}>
            <h1 className={css.boxTitle}>{props.boxTitle}</h1>
        </div>

        <div className={css.boxContent}>{props.children}</div>
    </div>
);

export default Box;
