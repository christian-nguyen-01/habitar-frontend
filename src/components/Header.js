import React, { Component } from 'react'
import AuthService from '../services/AuthService'
import { NavContainer, NavItem, SmallLogo } from './Header.style'
import Sound from './Sound'

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

		let register
        let login
		let text
		let logo
		let path

        // check if the user is logged in or not
		if(this.auth.loggedIn()) {
			register = ""
		} else {
			register = <NavItem to="/register">
				REGISTER
			</NavItem>
		}

		if(this.auth.loggedIn()) {
			login = <NavItem to="/" onClick={this.handleLogout}>
				LOGOUT
			</NavItem>
		} else {
			login = <NavItem to="/login">
				LOGIN
			</NavItem>
		}

		if(this.auth.loggedIn()) {
			path = "/dashboard"
			text = "DASHBOARD"
			logo = <a href="/dashboard"><SmallLogo width="50px" /></a>
		} else {
			path = "/register"
			text = ""
			logo = <a href="/login"><SmallLogo width="50px" /></a>
		}

        return (
            <NavContainer>
                <NavItem to="/">
					HOME
				</NavItem>
				<NavItem to="/about">
					ABOUT
				</NavItem>
				<NavItem to="/contact">
					CONTACT
				</NavItem>
				{register}
				{login}
				<NavItem to={path}>
					{text}
				</NavItem>
				<Sound />
				{logo}
            </NavContainer>
        )
    }
}

export default Header
