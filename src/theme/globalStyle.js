import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Fredoka+One|Roboto+Condensed');

	* {
		margin: 0;
		padding: 0;
	}

	h1 {
		font-family: 'Chewy', cursive;
		font-weight: 100;
		color: #FFF;
	}

	p {
		font-family: 'Lato', sans-serif;
		font-weight: 100;
		font-size: 18px;
		color: #FFF;
	}
`
