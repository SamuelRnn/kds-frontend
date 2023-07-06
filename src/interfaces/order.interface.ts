export enum OrderStatus {
	finished = 'finished',
	progress = 'progress',
	pending = 'pending',
	canceled = 'canceled',
}

export interface SpecialInstructions {
	addons: string[]
	exclusions: string[]
}

export interface OrderItem {
	id: string
	name: string
	specialInstructions: SpecialInstructions
	quantity: string
}

export interface OrderInterface {
	id: string
	table: string
	items: OrderItem[]
	status: OrderStatus
	orderTime: string
}
