import { useRef, useState } from 'react'
import { MenuItem, OrderItem } from '@/interfaces/order.interface'
import { OrderFormContext } from './new-order-context'
import useOrdersStore from '@/hooks/use-orders-store'
import {
	createNewOrderItemFromMenuItem,
	findPreviousExistingOrderItemById,
	generateRandomOrderId,
} from '@/context/helpers'

export default function NewOrderFormProvider({ children }: { children: React.ReactNode }) {
	// defined constants
	const MAX_TABLES = 14

	// states, refs and stores
	const { addOrder } = useOrdersStore()

	const [tableNumber, setTableNumber] = useState<null | number>(null)
	const [orderItems, setOrderItems] = useState<OrderItem[]>([])

	const tablesRef = useRef(Array.from({ length: MAX_TABLES }, (_, index) => index + 1))

	//mutations
	const selectTableNumber = (table: number) => {
		tableNumber !== table && setTableNumber(table)
	}
	const addNewItemToOrder = (item: MenuItem) => {
		let orderItemsClone = [...orderItems]
		const previousExistingItem = findPreviousExistingOrderItemById(orderItemsClone, item.id)

		if (previousExistingItem) {
			previousExistingItem.quantity++
		} else {
			const newOrderItem = createNewOrderItemFromMenuItem(item)
			orderItemsClone.push(newOrderItem)
		}

		setOrderItems(orderItemsClone)
	}
	const removeItemFromOrder = (itemId: string) => {}
	const changeItemQuantity = (itemId: string, action: 'increase' | 'decrease') => {}
	const addAddon = (addon: string) => {}
	const removeAddon = (addon: string) => {}
	const addExclusion = (exclusion: string) => {}
	const removeExclusion = (exclusion: string) => {}

	//submit handler
	const submitHandler = (event: React.FormEvent<HTMLFormElement>, callback: () => void) => {
		event.preventDefault()
		if (!tableNumber) return
		if (!orderItems.length) return

		addOrder({
			id: generateRandomOrderId(),
			items: orderItems,
			orderTime: new Date().toISOString(),
			status: 'pending',
			table: tableNumber,
		})
		callback()
	}

	return (
		<OrderFormContext.Provider
			value={{
				tables: tablesRef.current,
				tableNumber,
				orderItems,
				selectTableNumber,
				addNewItemToOrder,
				removeItemFromOrder,
				changeItemQuantity,
				addAddon,
				removeAddon,
				addExclusion,
				removeExclusion,
				submitHandler,
			}}
		>
			{children}
		</OrderFormContext.Provider>
	)
}
