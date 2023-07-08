import { MenuItem, OrderItem } from '@/interfaces/order.interface'

export const createNewOrderItemFromMenuItem = (item: MenuItem) => ({
	id: item.id,
	name: item.name,
	quantity: 1,
	specialInstructions: {
		addons: [],
		exclusions: [],
	},
})

export const findPreviousExistingOrderItemById = (
	orders: OrderItem[],
	itemId: string
): OrderItem | undefined => {
	return orders.find((currentItem) => {
		return currentItem.id === itemId
	})
}

export const generateRandomOrderId = () => {
	const length = 20
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

	let id = 'order-'
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length)
		id += characters.charAt(randomIndex)
	}

	return id
}
