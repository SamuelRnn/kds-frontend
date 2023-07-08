import { OrderInterface } from '@/interfaces/order.interface'
import { styled } from 'styled-components'
import StatusBadge from './status-badge'
import OrderItems from './order-items'
import Counter from './counter'
import useOrdersStore from '@/hooks/use-orders-store'
import { StyledBaseButton } from '../_common/common-styles'

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
const StyledOrderActionsContainer = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: flex-end;
	margin-top: 1rem;
`
const StyledOrderManagementButton = styled(StyledBaseButton)`
	&[data-action='start'] {
		background-color: var(--colors-ucla-blue);
	}
	&[data-action='cancel'] {
		background-color: var(--colors-persian-red);
	}
	&[data-action='mark-ready'] {
		background-color: var(--colors-cambridge-green-dark);
	}
`

interface Props {
	orderData: OrderInterface
}
export default function OrderCard({ orderData }: Props) {
	const { changeOrderStatus } = useOrdersStore()

	const startOrder = () => changeOrderStatus(orderData.id, 'progress')
	const cancelOrder = () => changeOrderStatus(orderData.id, 'canceled')
	const markOrderAsReady = () => changeOrderStatus(orderData.id, 'done')

	return (
		<StyledOrderCardContainer>
			<StyledCardTitleContainer>
				<p>
					Table {orderData.table} -{' '}
					<Counter orderDate={orderData.orderTime} status={orderData.status} />
				</p>
				<StatusBadge status={orderData.status} />
			</StyledCardTitleContainer>

			<OrderItems items={orderData.items} />

			<StyledOrderActionsContainer>
				<StyledOrderManagementButton onClick={startOrder} data-action='start'>
					Start order
				</StyledOrderManagementButton>
				<StyledOrderManagementButton onClick={cancelOrder} data-action='cancel'>
					Cancel order
				</StyledOrderManagementButton>
				<StyledOrderManagementButton onClick={markOrderAsReady} data-action='mark-ready'>
					Mark as Done
				</StyledOrderManagementButton>
			</StyledOrderActionsContainer>
		</StyledOrderCardContainer>
	)
}
