'use client'

import { StyledEmptyOrdersScreen, StyledPageTitle } from '@/components/_common/common-styles'
import OrdersContainer from '@/components/orders-container'
import OrderCard from '@/components/order-card/order-card'
import sortOrdersByDate from '@/helpers/sort-orders-by-date'
import useOrdersStore from '@/hooks/use-orders-store'

export default function Home() {
	const { orders } = useOrdersStore()

	const activeOrders = orders.filter((order) => order.status !== 'canceled')

	return (
		<>
			<StyledPageTitle>
				<span>{activeOrders.length}</span> active orders
			</StyledPageTitle>

			<OrdersContainer>
				{activeOrders.length ? (
					sortOrdersByDate(orders).map((order) => (
						<OrderCard key={order.id} orderData={order}></OrderCard>
					))
				) : (
					<StyledEmptyOrdersScreen>No active orders yet</StyledEmptyOrdersScreen>
				)}
			</OrdersContainer>
		</>
	)
}
