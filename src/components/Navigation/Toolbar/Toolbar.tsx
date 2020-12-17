import * as React from 'react';
import * as css from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props: any) => (
    <header className={css.Toolbar}>
        <div className={css.Menu} onClick={props.open}>
            <div />
            <div />
            <div />
        </div>
        <Logo height="80%" />
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar;