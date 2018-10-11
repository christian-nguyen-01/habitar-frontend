import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex } from './grid'

export const LeavesBg = styled(Flex)`
	background-image: url('/assets/leaves-background.png');
	min-width: 100%;
	min-height: 100%;
	background-size: cover;
	position: absolute;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	`

export const Bg = styled(Flex)`
	background-image: url('/assets/general-background.png');
	min-width: 100%;
	min-height: 100%;
	background-size: cover;
	position: absolute;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
`
export const A = styled(Link)`
	color: white;
	text-decoration: none;
	font-size: 3vw;
	font-family: 'Fredoka One', cursive;
	padding: 3%
	&:hover {
		content: ' ';
		text-decoration: none;
	    color: #F7B733;
	    font-size: 3vw;
	    font-family: 'Fredoka One', cursive;
	    padding: 3%
	}
`
export const A2 = styled(Link)`
	color: white;
	text-decoration: none;
	font-size: 2vw;
	font-family: 'Roboto Condensed', sans-serif;
	padding: 3%
	&:hover {
		content: ' ';
		text-decoration: none;
	    color: #F7B733;
	    font-size: 2vw;
	    font-family: 'Roboto Condensed', sans-serif;
	    padding: 3%
	}
`

export const Img = styled.img`
	${({width}) => width && css `
		width: ${width};
	`}

	${({height}) => height && css `
		height: ${height};
	`}

	${({maxWidth}) => maxWidth && css `
		max-width: ${maxWidth};
	`}
`
