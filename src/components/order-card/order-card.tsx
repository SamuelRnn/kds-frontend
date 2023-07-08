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
	font-size: 0.875rem;
	font-weight: bold;
	&[data-action='start'] {
		background-color: var(--colors-ucla-blue);
	}
	&[data-action='cancel'] {
		background-color: var(--colors-persian-red);
	}
	&[data-action='mark-ready'] {
		background-color: var(--colors-cambridge-green-dark);
	}
	&:disabled {
		background-color: var(--colors-lightning-black-700);
		opacity: 0.6;
		pointer-events: none;
	}
`

interface Props {
	orderData: OrderInterface
}
export default function OrderCard({ orderData }: Props) {
	const { changeOrderStatus } = useOrdersStore()

	const startOrder = () =>
		orderData.status !== 'progress' && changeOrderStatus(orderData.id, 'progress')
	const cancelOrder = () =>
		orderData.status !== 'canceled' && changeOrderStatus(orderData.id, 'canceled')
	const markOrderAsReady = () =>
		orderData.status !== 'done' && changeOrderStatus(orderData.id, 'done')

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
				<StyledOrderManagementButton
					onClick={cancelOrder}
					data-action='cancel'
					disabled={'done-canceled'.includes(orderData.status)}
				>
					Cancel order
				</StyledOrderManagementButton>
				<StyledOrderManagementButton
					onClick={startOrder}
					data-action='start'
					disabled={orderData.status === 'progress'}
				>
					{'done-canceled'.includes(orderData.status) ? 'Restart' : 'Start'} order
				</StyledOrderManagementButton>
				<StyledOrderManagementButton
					onClick={markOrderAsReady}
					data-action='mark-ready'
					disabled={'done-canceled'.includes(orderData.status)}
				>
					Mark as Done
				</StyledOrderManagementButton>
			</StyledOrderActionsContainer>
		</StyledOrderCardContainer>
	)
}
