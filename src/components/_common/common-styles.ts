import { styled } from 'styled-components'

export const StyledPageTitle = styled.h1`
	color: var(--colors-raisin-black);
	font-size: 1.5rem;
	position: sticky;
	top: 0;
	background-color: var(--colors-lightning-black-900);
	padding: 1rem;
	& > span {
		color: var(--colors-ghost-white);
	}
`
export const StyledEmptyOrdersScreen = styled.div`
	display: grid;
	place-content: center;
	column-span: all;
	height: 100%;
	color: var(--colors-delft-blue);
`
