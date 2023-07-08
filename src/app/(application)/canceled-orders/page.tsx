'use client'

import PageContent from '@/components/page-content'
import { OrderInterface } from '@/interfaces/order.interface'

export default function CanceledOrdersPage() {
	const filterCondition = (order: OrderInterface) => order.status === 'canceled'

	return (
		<PageContent
			title='Canceled orders'
			filterCondition={filterCondition}
			emptyMessage='No canceled orders yet'
		/>
	)
}
