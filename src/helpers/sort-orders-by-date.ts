import { OrderInterface } from '@/interfaces/order.interface'

export default function sortOrdersByDate(orders: OrderInterface[]): OrderInterface[] {
	const newOrders = structuredClone(orders)
	const sortedOrders = newOrders.sort((a, b) => {
		const dateA = new Date(a.orderTime)
		const dateB = new Date(b.orderTime)
		return dateB.getTime() - dateA.getTime()
	})

	return sortedOrders
}
