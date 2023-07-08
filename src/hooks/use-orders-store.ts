import { OrderInterface, OrderStatus } from '@/interfaces/order.interface'
import { ordersActions } from '@/store/orders-slice'
import { AppDispatch, RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'

export default function useOrdersStore() {
	const orders = useSelector((state: RootState) => state.orders.orders)
	const dispatch = useDispatch<AppDispatch>()

	return {
		orders,
		addOrder: (order: OrderInterface) => dispatch(ordersActions.addOrder(order)),
		changeOrderStatus: (orderId: string, newStatus: OrderStatus) =>
			dispatch(ordersActions.changeOrderStatus({ newStatus, orderId })),
	}
}
