export type OrderStatus = 'finished' | 'progress' | 'pending' | 'canceled'

export interface SpecialInstructions {
	addons: string[]
	exclusions: string[]
}

export interface OrderItem {
	id: string
	name: string
	specialInstructions: SpecialInstructions
	quantity: number
}

export interface OrderInterface {
	id: string
	table: number
	items: OrderItem[]
	status: OrderStatus
	orderTime: string
}
