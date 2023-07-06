import { OrderInterface } from '@/interfaces/order.interface'
import { styled } from 'styled-components'
import StatusBadge from './status-badge'
import OrderItems from './order-items'
import Counter from './counter'

const StyledOrderCardContainer = styled.div`
	display: block;
	background-color: var(--colors-lightning-black-800);
	border-radius: var(--radius-box);
	padding: 0.75rem 0.5rem;
	margin-bottom: var(--masonry-gap);
	break-inside: avoid;
	min-width: var(--order-card-width);
`
const StyledCardTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
`

interface Props {
	orderData: OrderInterface
}
export default function OrderCard({ orderData }: Props) {
	return (
		<StyledOrderCardContainer>
			<StyledCardTitleContainer>
				<p>
					Table {orderData.table} - <Counter orderDate={orderData.orderTime} />
				</p>
				<StatusBadge status={orderData.status} />
			</StyledCardTitleContainer>

			<OrderItems items={orderData.items} />
		</StyledOrderCardContainer>
	)
}
