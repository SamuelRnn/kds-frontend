import { styled } from 'styled-components'

export const StyledPageTitle = styled.h1`
	color: var(--colors-raisin-gray);
	font-size: 1.5rem;
	position: sticky;
	top: 0;
	background-color: var(--colors-lightning-black-900);
	padding: 1rem;
	z-index: 10;
	& > span {
		color: var(--colors-ghost-white);
	}
`
export const StyledEmptyOrdersScreen = styled.div`
	color: var(--colors-delft-blue);
`
export const StyledBaseButton = styled.button`
	padding: 0.5rem 0.75rem;
	background-color: var(--colors-lightning-black-700);
	border-radius: var(--radius-box);
`
export const StyledBaseNavItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 2rem;
	gap: 0.3rem;
	padding: 0.5rem;
	position: relative;
	transition: color ease-out 80ms;
	color: var(--colors-raisin-gray);

	&:hover {
		transition: background-color ease-out 120ms;
		background-color: rgb(200 200 255 / 0.05);
	}

	& span {
		font-size: 1rem;
	}
`
