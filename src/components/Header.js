import React, { Component } from 'react'
import AuthService from '../services/AuthService'
// import createBrowserHistory from 'history/createBrowserHistory'
// import { Redirect } from 'react-router-dom'
import {
    Navbar
    // Nav,
    // NavItem,
    // NavDropdown,
    // MenuItem
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

        // let burger = <i className="fas fa-bars"></i>
        let login
        // check if the user is logged in or not
        if(this.auth.loggedIn()){
            login = <Navbar.Text><Navbar.Link href="/" onClick={this.handleLogout} className="logout">
                Logout
            </Navbar.Link></Navbar.Text>
        } else {
            login = <Navbar.Text><Navbar.Link className = "login" href="/login">
                Login
            </Navbar.Link></Navbar.Text>
        }
        let register
        if(this.auth.loggedIn())register=""
        else register = <Navbar.Text><Navbar.Link className = "register" href="/register"  >Register</Navbar.Link></Navbar.Text>
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="/dashboard" id="smallLogo">Habitar logo</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse className = "burger">
                      {login}
                      {register}
                        <Navbar.Text><Navbar.Link href="/" className = "home" >Home</Navbar.Link></Navbar.Text>


                        <Navbar.Text><Navbar.Link href="/about" className = "about" >About</Navbar.Link></Navbar.Text>

                        <Navbar.Text><Navbar.Link href="/contact" className = "contactUs" >Contact Us</Navbar.Link></Navbar.Text>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}


export default Header;
