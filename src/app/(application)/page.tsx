'use client'

import { StyledPageTitle, StyledPageTitleSpan } from '@/components/_common/common-styles'
import OrdersContainer from '@/components/orders-container'
import Order from '@/components/order'

interface Props {}

export default function Home({}: Props) {
	return (
		<>
			<StyledPageTitle>
				<StyledPageTitleSpan>0</StyledPageTitleSpan> current orders
			</StyledPageTitle>

			<OrdersContainer>
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
			</OrdersContainer>
		</>
	)
}
