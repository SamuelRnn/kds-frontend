import { styled } from 'styled-components'

export const StyledForm = styled.form`
	width: min(95%, 1400px);
	background-color: var(--colors-lightning-black-800);
	margin: 0 auto;
	border-radius: var(--radius-box);
	height: calc(100vh - 2rem);
	overflow-y: hidden;
`
export const StyledTitleBar = styled.div`
	padding: 0.75rem 1rem;
	border-bottom: 1px solid var(--colors-lightning-black-700);
`
export const StyledFormLayout = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: 3fr 1fr;
	gap: 1.5rem;
	height: 85%;
	overflow-y: hidden;
`
export const StyledLayoutColumnContainer = styled.div`
	border: 1px solid white;
	display: flex;
	flex-direction: column;
	row-gap: 1.25rem;
	height: 100%;
`
export const StyledMenuContainer = styled.div`
	overflow-y: auto;
`

export const StyledSection = styled.section``
export const StyledLabel = styled.p`
	color: var(--colors-raisin-gray);
	font-weight: bold;
	padding-bottom: 0.75rem;
	position: sticky;
	top: 0;
	background-color: var(--colors-lightning-black-800);
`
