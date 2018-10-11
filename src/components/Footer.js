import React, { Component } from 'react';
import { FooterContainer, FooterLink, FooterItem, FznLogo } from './Footer.style'

class Footer extends Component {

  	render() {
    	return (
			<FooterContainer>
				<a href="https://github.com/Habitar"><FznLogo height="60px" /></a>
			</FooterContainer>
    	);
  	}
}

export default Footer
