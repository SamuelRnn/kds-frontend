export type OrderStatus = 'done' | 'progress' | 'pending' | 'canceled'

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

export interface MenuItem {
	id: string
	name: string
}
