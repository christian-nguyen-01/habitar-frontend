import React, { Component } from 'react';
import { LeavesBg, Bg, A } from '../theme/types'
import { HabitarLogo, LinkContainer, LandingLine } from './LandingPage.style'

class LandingPage extends Component {

	jungleSounds = () => {
		new Audio('/sounds/jungle.wav').play()
	}

    render() {

		this.jungleSounds()

        return (
			<LeavesBg>
                <HabitarLogo />

                <LinkContainer justify="space-evenly">
	                <A to="/register">Register</A>
	                <LandingLine>|</LandingLine>
	                <A to="/login">Login</A>
                </LinkContainer>

            </LeavesBg>
        );
    }
}

export default LandingPage;
