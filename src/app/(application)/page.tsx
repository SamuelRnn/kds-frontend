'use client'

import { StyledPageTitle, StyledPageTitleSpan } from '@/components/_common/common-styles'
import OrdersContainer from '@/components/orders-container'
import OrderCard from '@/components/order-card/order-card'

import { OrderInterface } from '@/interfaces/order.interface'

import sortOrdersByDate from '@/helpers/sort-orders-by-date'
import useOrdersStore from '@/hooks/use-orders-store'

export default function Home() {
	const { orders } = useOrdersStore()
	return (
		<>
			<StyledPageTitle>
				<StyledPageTitleSpan>{orders.length}</StyledPageTitleSpan> current orders
			</StyledPageTitle>

			<OrdersContainer>
				{orders.length
					? sortOrdersByDate(orders as unknown as OrderInterface[]).map((order) => (
							<OrderCard key={order.id} orderData={order as unknown as OrderInterface}></OrderCard>
					  ))
					: 'Aun no hay ordenes'}
			</OrdersContainer>
		</>
	)
}
