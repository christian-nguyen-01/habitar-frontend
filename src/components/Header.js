import React, { Component } from 'react'
import AuthService from '../services/AuthService'
import createBrowserHistory from 'history/createBrowserHistory'
import { Redirect } from 'react-router-dom'


class Header extends Component {

    constructor(props) {
      super(props)
      this.auth = new AuthService()
    }

    handleLogout = () => { // <- Remove local storage, and redirect the user
        this.auth.logout()
        this.history.replace('/login')
    }

    render() {

        // check if the user is logged in or not
        if(this.auth.loggedIn()){
            return (
                <div>
                    <a href="/"><button className="home"> Home </button></a>
                    <a href="/"><button className="login-or-out" onClick={this.handleLogout}> Logout </button></a>
                </div>
            )
        } else {
            return(
                <div>
                    <a href="/"><button className="home"> Home </button></a>
                    <a href="/login"><button className="login-or-out"> Login </button></a>
                </div>
            )
        }
    }
}

export default Header;
