import { MenuItem, OrderItem } from '@/interfaces/order.interface'
import { createContext } from 'react'

export interface FormContext {
	tables: number[]
	tableNumber: number | null
	orderItems: OrderItem[]
	selectTableNumber: (table: number) => void
	addNewItemToOrder: (item: MenuItem) => void
	removeItemFromOrder: (itemId: string) => void
	changeItemQuantity: (itemId: string, action: 'increase' | 'decrease') => void
	addAddon: (addon: string) => void
	removeAddon: (addon: string) => void
	addExclusion: (exclusion: string) => void
	removeExclusion: (exclusion: string) => void
	submitHandler: (event: React.FormEvent<HTMLFormElement>, callback: () => void) => void
}

export const OrderFormContext = createContext<FormContext | null>(null)
