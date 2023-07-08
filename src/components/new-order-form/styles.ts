import { styled } from 'styled-components'

export const StyledTitleBar = styled.div`
	padding: 0.75rem 1rem;
	border-bottom: 1px solid var(--colors-lightning-black-700);
`
export const StyledFormLayout = styled.div`
	display: flex;
	padding: 1rem;
	gap: 1rem;
	overflow-y: hidden;
`

export const StyledFirstColumn = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	gap: 2rem;
`
export const StyledSecondColumn = styled.div`
	min-width: 240px;
	overflow-y: auto;
`

export const StyledSection = styled.section``

export const StyledOrderSection = styled.section`
	overflow-y: scroll;
	height: 100%;
`
export const StyledLabel = styled.p`
	color: var(--colors-raisin-gray);
	font-weight: bold;
	padding-bottom: 0.75rem;
	position: sticky;
	top: 0;
	background-color: var(--colors-lightning-black-800);
`
