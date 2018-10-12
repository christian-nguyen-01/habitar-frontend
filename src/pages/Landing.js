import React, { Component } from 'react';
import './Landing.css'

class Landing extends Component {

    render() {
      
		let habitarLogo = '/logos/habitar-orange.png'

        return (
			<div className="landingPage">
                <img className="habitarLogo" src={habitarLogo} alt="Habitar Logo"></img>

                <div className="landingPageLinksContainer">
                  <a className="landingPageLinks" href="/register">
                    Register
                  </a>
                  <p className="landingPageLine"> | </p>
                  <a className="landingPageLinks" href="/login">
                    Login
                  </a>
                </div>
            </div>
        );
    }
}

export default Landing;
