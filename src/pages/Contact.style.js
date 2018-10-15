import styled from 'styled-components'
import { Img } from '../theme/types'
import media from '../theme/media'

export const FuzionLogo = styled(Img)`
	content: url('/logos/fuzion-horizontal.png');
	max-width: 45%;
  margin-top:-2%;

	${media.tablet `
		max-width: 70%;
		margin-top:-25%;
		`}
`
