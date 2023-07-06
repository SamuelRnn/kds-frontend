import { styled } from 'styled-components'

const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
	columns: 5 360px;
	column-gap: var(--masonry-gap);
	padding: 1rem;
`
interface Props {
	children: React.ReactNode
}
export default function OrdersContainer({ children }: Props) {
	return <StyledContainer>{children}</StyledContainer>
}
