import { Order } from '@/interfaces/order.interface'
import { styled } from 'styled-components'

const StyledOrderContainer = styled.div`
	background-color: var(--colors-lightning-black-800);
	padding: 0.5rem;
	height: max-content;
`
interface Props {
	orderData: Order
}
export default function Order({ orderData }: Props) {
	return <StyledOrderContainer>{JSON.stringify(orderData.items)}</StyledOrderContainer>
}
