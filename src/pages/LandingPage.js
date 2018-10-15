import React, { Component } from 'react';
import { LeavesBg, A } from '../theme/types'
import { HabitarLogo, LinkContainer, LandingLine } from './LandingPage.style'

class LandingPage extends Component {

    render() {


        return (
			<LeavesBg>
                <HabitarLogo />

                <LinkContainer justify="space-evenly">
	                <A to="/register">Register</A>
	                <LandingLine>{`\u00A0`}|{`\u00A0`}</LandingLine>
	                <A to="/login">Login</A>
                </LinkContainer>

            </LeavesBg>
        );
    }
}

export default LandingPage;
