import { styled } from 'styled-components'

const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
	/* column-width: var(--order-card-width); */
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
	grid-template-rows: masonry;
	column-gap: var(--masonry-gap);
	padding: 0 1rem;
`
interface Props {
	children: React.ReactNode
}
export default function OrdersContainer({ children }: Props) {
	return <StyledContainer>{children}</StyledContainer>
}
