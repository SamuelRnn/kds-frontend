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
	const removeItemFromOrder = (itemId: string) => {
		let orderItemsClone = [...orderItems]
		setOrderItems(orderItemsClone.filter((item) => item.id !== itemId))
	}
	const changeItemQuantity = (itemId: string, action: 'increase' | 'decrease') => {
		let orderItemsClone = [...orderItems]
		const previousExistingItem = findPreviousExistingOrderItemById(orderItemsClone, itemId)
		if (!previousExistingItem) return
		if (action === 'increase') {
			previousExistingItem.quantity++
		}
		if (action === 'decrease') {
			if (previousExistingItem.quantity <= 1) return
			else previousExistingItem.quantity--
		}
		setOrderItems(orderItemsClone)
	}
	const editInstructions = (
		itemId: string,
		subGroup: 'addons' | 'exclusions',
		action: 'add' | 'remove',
		payload: string
	) => {
		let orderItemsClone = [...orderItems]
		const previousExistingItem = findPreviousExistingOrderItemById(orderItemsClone, itemId)
		if (!previousExistingItem) return

		let targetSubGroup = previousExistingItem.specialInstructions[subGroup]
		if (action === 'add') {
			targetSubGroup.push(payload)
		}
		if (action === 'remove') {
			targetSubGroup = targetSubGroup.filter((str) => str !== payload)
		}
		setOrderItems(orderItemsClone)
	}

	const addAddon = (itemId: string, addon: string) => {
		editInstructions(itemId, 'addons', 'add', addon)
	}
	const removeAddon = (itemId: string, addon: string) => {
		editInstructions(itemId, 'addons', 'remove', addon)
	}
	const addExclusion = (itemId: string, exclusion: string) => {
		editInstructions(itemId, 'exclusions', 'add', exclusion)
	}
	const removeExclusion = (itemId: string, exclusion: string) => {
		editInstructions(itemId, 'exclusions', 'remove', exclusion)
	}

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
