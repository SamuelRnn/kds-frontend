'use client'

import PageContent from '@/components/page-content'
import { OrderInterface } from '@/interfaces/order.interface'

export default function DoneOrdersPage() {
	const filterCondition = (order: OrderInterface) => order.status === 'done'

	return (
		<PageContent
			title='Finished orders'
			filterCondition={filterCondition}
			emptyMessage='No finished orders yet'
		/>
	)
}
