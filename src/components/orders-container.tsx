import { styled } from 'styled-components'

const StyledContainer = styled.div`
	width: 100%;
	column-gap: var(--masonry-gap);
	column-width: var(--order-card-width);
	padding: 1rem;
`
interface Props {
	children: React.ReactNode
}
export default function OrdersContainer({ children }: Props) {
	return <StyledContainer>{children}</StyledContainer>
}
