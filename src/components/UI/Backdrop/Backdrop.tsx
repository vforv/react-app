import * as React from 'react';
import * as css from './Backdrop.css';

const Backdrop = (props: any) => (
    props.show ? <div className={css.Backdrop} onClick={props.clicked}/> : null
);

export default Backdrop;