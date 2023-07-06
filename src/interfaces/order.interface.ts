export enum OrderStatus {
	finished,
	progress,
	pending,
	cancelled,
}

export interface SpecialInstruction {
	addons: string[]
	exclusions: string[]
}

export interface OrderItem {
	id: string
	name: string
	specialInstructions: SpecialInstruction
	quantity: string
}

export interface Order {
	id: string
	table: number
	items: OrderItem[]
	status: OrderStatus
	orderTime: Date
}
