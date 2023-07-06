import { Order } from '@/interfaces/order.interface'
import { styled } from 'styled-components'

interface Props {
	orderData?: Order
}

const StyledOrderContainer = styled.div`
	background-color: var(--colors-lightning-black-800);
`

export default function Order({ orderData }: Props) {
	return <StyledOrderContainer>this is a order</StyledOrderContainer>
}
