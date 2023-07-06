import { OrderInterface } from '@/interfaces/order.interface'
import { styled } from 'styled-components'

const StyledOrderContainer = styled.div`
	background-color: var(--colors-lightning-black-800);
	padding: 0.5rem;
	margin-bottom: var(--masonry-gap);
	break-inside: avoid;
`
interface Props {
	orderData: OrderInterface
}
export default function Order({ orderData }: Props) {
	return <StyledOrderContainer>{JSON.stringify(orderData, null, 2)}</StyledOrderContainer>
}
