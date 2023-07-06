import { styled } from 'styled-components'

interface Props {
	children: React.ReactNode
}

const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(360px, auto));
	gap: 1rem;
`

export default function OrdersContainer({ children }: Props) {
	return <StyledContainer>{children}</StyledContainer>
}
