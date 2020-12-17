import * as React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import * as css from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const SideDrawer = (props: any) => {
    let attachClass = [css.SideDrawer, css.Close];
    if(props.open) {
        attachClass = [css.SideDrawer, css.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.close} />
            <div className={attachClass.join(' ')}>
                <Logo height="11%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default SideDrawer;