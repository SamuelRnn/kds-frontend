'use client'

import PageContent from '@/components/page-content'
import { OrderInterface } from '@/interfaces/order.interface'

export default function Home() {
	const filterCondition = (order: OrderInterface) => {
		return order.status !== 'canceled' && order.status !== 'done'
	}

	return (
		<PageContent
			title='Current active orders'
			filterCondition={filterCondition}
			emptyMessage='no active orders yet'
		/>
	)
}
