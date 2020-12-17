import * as React from 'react';
import * as css from './Button.css';

const Button = (props: any) => (
    <button
        className={`${css.Button} ${css[props.btnType]}`}
        onClick={props.clicked}>{props.children}</button>
);

export default Button;