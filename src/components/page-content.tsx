import { StyledEmptyOrdersScreen, StyledPageTitle } from '@/components/_common/common-styles'
import OrdersContainer from '@/components/orders-container'
import OrderCard from '@/components/order-card/order-card'
import sortOrdersByDate from '@/helpers/sort-orders-by-date'
import useOrdersStore from '@/hooks/use-orders-store'
import { OrderInterface } from '@/interfaces/order.interface'

interface Props {
	title: string
	filterCondition: (order: OrderInterface) => boolean
	emptyMessage: string
}

export default function PageContent({ title, filterCondition, emptyMessage }: Props) {
	const { orders } = useOrdersStore()

	const activeOrders = orders.filter(filterCondition)

	return (
		<>
			<StyledPageTitle>{title}</StyledPageTitle>

			<OrdersContainer>
				{activeOrders.length ? (
					sortOrdersByDate(activeOrders).map((order) => (
						<OrderCard key={order.id} orderData={order} />
					))
				) : (
					<StyledEmptyOrdersScreen>{emptyMessage}</StyledEmptyOrdersScreen>
				)}
			</OrdersContainer>
		</>
	)
}
