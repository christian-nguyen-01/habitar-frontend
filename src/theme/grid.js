import styled, { css } from 'styled-components'

export const Div = styled.div`
	${({marginBottom}) => marginBottom && css `
		margin-bottom: ${marginBottom};
	`}
	${({marginTop}) => marginTop && css `
		margin-top: ${marginTop};
	`}
	${({paddingLeft}) => paddingLeft && css `
		padding-left: ${paddingLeft};
	`}
`

export const Container = styled(Div)`
	padding-left: 5%;
	padding-right: 5%;
	padding-top: 30px;
	padding-bottom: 30px;
`

export const NarrowContainer = styled(Div)`
	padding-left: 8%;
	padding-right: 8%;
	padding-top: 30px;
	padding-bottom: 30px;
	${({ relative }) => relative && css `
		display : ${relative};
	`}
`

export const Relative = styled(Div)`
	position: relative;
`

export const Flex = styled(Div)`
	display: flex;
	
	${({ justify }) => justify && css `
		justify-content: ${justify};
	`}
	${({ align }) => align && css `
		align-content: ${align};
	`}
	${({ column }) => column && css `
		flex-direction : column;
	`}
`
