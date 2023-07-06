'use client'

import { orders } from '@public/¨mock-data.json'

import { StyledPageTitle, StyledPageTitleSpan } from '@/components/_common/common-styles'
import OrdersContainer from '@/components/orders-container'
import OrderCard from '@/components/order-card/order-card'

import { OrderInterface } from '@/interfaces/order.interface'

import sortOrdersByDate from '@/helpers/sort-orders-by-date'

export default function Home() {
	return (
		<>
			<StyledPageTitle>
				<StyledPageTitleSpan>0</StyledPageTitleSpan> current orders
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
