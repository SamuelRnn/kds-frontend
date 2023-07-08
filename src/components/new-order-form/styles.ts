import { styled } from 'styled-components'

export const StyledForm = styled.form`
	width: min(95%, 1200px);
	background-color: var(--colors-lightning-black-800);
	margin: 0 auto;
	border-radius: var(--radius-box);
	max-height: calc(100vh - 2rem);
	overflow-y: hidden;
	border: 1px solid var(--colors-lightning-black-700);
	display: flex;
	flex-direction: column;
	animation: modalSlideUp 300ms;
	animation-timing-function: cubic-bezier(0, 0.92, 0.37, 0.99);
	animation-fill-mode: forwards;

	@keyframes modalSlideUp {
		from {
			transform: translateY(200px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
`
export const StyledModalControls = styled.div`
	display: flex;
	gap: 1rem;

	& > button {
		padding: 0.25rem 1rem;

		&[type='button'] {
			background-color: var(--colors-persian-red);
		}
		&[type='submit'] {
			background-color: var(--colors-ucla-blue);
		}
	}
`
export const StyledTitleBar = styled.div`
	padding: 0.75rem 1rem;
	border-bottom: 1px solid var(--colors-lightning-black-700);
	display: flex;
	justify-content: space-between;
	align-items: center;
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
