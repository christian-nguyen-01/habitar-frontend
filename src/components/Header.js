import React, { Component } from 'react'
import AuthService from '../services/AuthService'
import createBrowserHistory from 'history/createBrowserHistory'
import { Redirect } from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem
  } from 'react-bootstrap';



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

        let burger = <i className="fas fa-bars"></i>
        let login
        // check if the user is logged in or not
        if(this.auth.loggedIn()){
            login = <MenuItem eventKey={1.2} href="/" onClick={this.handleLogout} className="logout">
                Logout
            </MenuItem>
        } else {
            login = <MenuItem eventKey={1.2} className = "login" href="/login">
                Login
            </MenuItem>

        } return (
            <div>
                <Navbar inverse collapseOnSelect>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="/" id="smallLogo">Habitar logo</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav pullRight>

                          <NavDropdown eventKey={1} title={burger} id="basic-nav-dropdown" noCaret className="burger">

                        <MenuItem eventKey={1.1} href="/">
                            Home
                        </MenuItem>

                        {login}

                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}


export default Header;
