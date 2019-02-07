import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Layout from './pages/Layout';
import allRoutesData from './Routes-Data';
import NotFoundPage from "./pages/404";


const router = allRoutesData();
class Router extends React.Component {


    render() {
        const { history } = this.props;
        return (
            <ConnectedRouter history={history}>
                    <Switch>
                        <Layout>
                        {router.map(route => (
                            <Route
                                path={route.path}
                                component={route.component}
                                key={route.path}
                                exact={route.exact}
                            />
                        ))}
                        </Layout>
                    </Switch>
            </ConnectedRouter>
        )
    }
}

export default Router;
