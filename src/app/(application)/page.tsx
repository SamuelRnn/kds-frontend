'use client'

import PageContent from '@/components/page-content'
import useFilterStore from '@/hooks/use-filter-store'
import { OrderInterface } from '@/interfaces/order.interface'

const filterConditions = {
	active: (order: OrderInterface) => order.status !== 'canceled' && order.status !== 'done',
	canceled: (order: OrderInterface) => order.status === 'canceled',
	done: (order: OrderInterface) => order.status === 'done',
}
const pageTitles = {
	active: 'Current active orders',
	canceled: 'Canceled orders',
	done: 'Finished orders',
}
const emptyMessages = {
	active: 'no active orders yet',
	canceled: 'no canceled orders yet',
	done: 'no finished orders yet',
}

export default function Home() {
	const { filter } = useFilterStore()

	return (
		<PageContent
			title={pageTitles[filter as keyof typeof pageTitles]}
			filterCondition={filterConditions[filter as keyof typeof filterConditions]}
			emptyMessage={emptyMessages[filter as keyof typeof emptyMessages]}
		/>
	)
}
