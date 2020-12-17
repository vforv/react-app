import * as React from "react";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import * as css from "./Layout.css";

class Layout extends React.Component {
    public state = {
        showSideDrawer: false,
    };

    public sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    public sideDrawerOpenHandler = () => {
        this.setState((prevState: any) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    public render() {
        return (
            <Aux>
                <Toolbar open={this.sideDrawerOpenHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    close={this.sideDrawerCloseHandler}
                />
                <main className={css.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
