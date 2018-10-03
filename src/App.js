import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

class App extends Component {

    render() {

        const history = createBrowserHistory()

        return (
            <div>
                <Router history = { history }>
                    <div>
                        <Switch>
                            <Route exact path = "/" component = { Landing } />
                            <Route path = "/register" component = { Register } />
                            <Route path = "/login" component = {Login} />
                            <Route path = "/dashboard" component= {Dashboard} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }

}

export default App;
