import { OrderStatus } from '@/interfaces/order.interface'

const badgesMap = {
	done: 'Done',
	progress: 'In Progress',
	pending: 'Pending',
	canceled: 'Canceled',
}

export default function getStatusLabel(code: OrderStatus) {
	return badgesMap[code]
}
