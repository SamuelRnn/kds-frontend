'use client'

import { orders } from '@public/¨mock-data.json'

import { StyledPageTitle, StyledPageTitleSpan } from '@/components/_common/common-styles'
import OrdersContainer from '@/components/order-container'
import Order from '@/components/order'

interface Props {}

export default function Home({}: Props) {
	return (
		<>
			<StyledPageTitle>
				<StyledPageTitleSpan>0</StyledPageTitleSpan> current orders
			</StyledPageTitle>

			<OrdersContainer>
				{orders.length
					? orders.map((order) => <Order key={order.id} orderData={order}></Order>)
					: 'Aun no hay ordenes'}
				{orders.length
					? orders.map((order) => <Order key={order.id} orderData={order}></Order>)
					: 'Aun no hay ordenes'}
			</OrdersContainer>
		</>
	)
}
