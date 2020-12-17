import * as React from "react";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login/Login";
import Account from "./containers/Account/Account";

class App extends React.Component {
    public render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/" exact={true} component={Login} />
                        <Route path="/account" component={Account} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
