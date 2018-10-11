import React, { Component } from 'react';
import { Bg, A } from '../theme/types'
import { HabitarLogo, LinkContainer, LandingLine } from './LandingPage.style'

class LandingPage extends Component {

    render() {

        return (
			<Bg>
                <HabitarLogo />

                <LinkContainer justify="space-evenly">
	                <A to="/register">Register</A>
	                <LandingLine>|</LandingLine>
	                <A to="/login">Login</A>
                </LinkContainer>

            </Bg>
        );
    }
}

export default LandingPage;
