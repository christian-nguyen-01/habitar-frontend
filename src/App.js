import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Landing from './pages/Landing'
import Register from './pages/Register'

class App extends Component {
    render() {

        const history = createBrowserHistory()

        return (
            <div>
                Hi!
                <Router history = { history }>
                    <div>
                        <Switch>
                            <Route exact path = "/" component = { Landing } />
                            <Route path = "/register" component = { Register } />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
