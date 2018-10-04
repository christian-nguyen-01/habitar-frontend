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

        let burger = <i class="fas fa-bars"></i>

        // check if the user is logged in or not
        if(this.auth.loggedIn()){
            return (
                <div>
                    <Navbar inverse collapseOnSelect>
                      <Navbar.Header>
                        <Navbar.Brand>
                          <a href="/">Habitar logo</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                      </Navbar.Header>
                      <Navbar.Collapse>
                        <Nav pullRight>

                              <NavDropdown eventKey={1} title={burger} id="basic-nav-dropdown" className="home">

                            <MenuItem eventKey={1.1} href="/">
                                Home
                            </MenuItem>

                            <MenuItem eventKey={1.2} href="/" onClick={this.handleLogout} className="login-or-out">
                                Logout
                            </MenuItem>

                          </NavDropdown>
                        </Nav>
                      </Navbar.Collapse>
                    </Navbar>
                </div>
            )
        } else {
            return(
                <div>
                    <Navbar inverse collapseOnSelect>
                      <Navbar.Header>
                        <Navbar.Brand>
                          <a href="/">Habitar logo</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                      </Navbar.Header>
                      <Navbar.Collapse>
                        <Nav pullRight>


                          <NavDropdown eventKey={1} title={burger} id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1} href="/">
                                Home
                            </MenuItem>
                            <MenuItem eventKey={1.2} href="/login">
                                Login
                            </MenuItem>
                          </NavDropdown>

                        </Nav>
                      </Navbar.Collapse>
                    </Navbar>

                </div>
            )
        }
    }
}

export default Header;
