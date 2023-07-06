'use client'

import { orders } from '@public/¨mock-data.json'

import { StyledPageTitle, StyledPageTitleSpan } from '@/components/_common/common-styles'
import OrdersContainer from '@/components/order-container'
import Order from '@/components/order-card'

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
							<Order key={order.id} orderData={order as unknown as OrderInterface}></Order>
					  ))
					: 'Aun no hay ordenes'}
			</OrdersContainer>
		</>
	)
}
