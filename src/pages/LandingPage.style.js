import styled from 'styled-components'
import { Flex } from '../theme/grid'
import { Img } from '../theme/types'
import media from '../theme/media'

export const HabitarLogo = styled(Img)`
	content: url('/logos/habitar-logo.png');
	max-width: 45%;

	${media.tablet `
		max-width: 85%;
		`}
`
export const LinkContainer = styled(Flex)`
	flex-flow: row nowrap;
	min-width: 10%;
	padding-top: 2%;

	${media.tablet `
		A {
			font-size: 2em;
			&:hover {
				font-size: 2em;
			}
		}
		`}
`

export const LandingLine = styled.p`
	color: white;
	font-size: 3vw;
	font-family: 'Fredoka One', cursive;
	padding: 3%

	${media.tablet `
		font-size: 2em;
		`}
`
