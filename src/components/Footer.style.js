import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Div } from '../theme/grid'
import { Img } from '../theme/types'
import media from '../theme/media'

export const FooterContainer = styled(Flex)`
	position: absolute;
	bottom: 0;
	align-items: space-evenly;
	align-items: center;
	padding-left: 35px;
	padding-bottom: 2px;
	padding-top: 8px;
	background-color: #FFF;
	width: 100vw;
`;

export const FooterItem = styled.p`
	margin-right: 20px;
	margin-right: 20px;
	font-family: 'Lato', sans-serif;
	position: relative;
	font-size: 1.2em;
	text-decoration: none;
	transition: 0.5s ease;
	color: #F7B733

	${media.desktop `
		font-size: 1em;
	`}
	${media.tablet `
		font-size: .75em;
	`}

	&:hover {
		color: hotpink;
		&:after {
			content: ' ';
			position: absolute;
			text-decoration: none;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			transform: scale(1.3);
		}
	}
`

export const FooterLink = styled.a`
	margin-right: 40px;
	font-family: 'Lato', sans-serif;
	position: relative;
	font-size: .75em;
	text-decoration: none;
	transition: 0.5s ease;
	color: #F7B733;

	${media.tablet `
		font-size: .65em;
	`}

	&:hover {
		color: hotpink;
		&:after {
			content: ' ';
			position: absolute;
			text-decoration: none;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			transform: scale(1.3);
		}
	}
`
export const FznLogo = styled(Img)`
	content: url('/logos/fuzion-horizontal.png');

	${media.tablet `
		max-height: 30px;
	`}
`
