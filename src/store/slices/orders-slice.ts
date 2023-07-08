import { OrderInterface, OrderStatus } from '@/interfaces/order.interface'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { orders } from '../mock-data'

export interface OrdersState {
	orders: OrderInterface[]
}

const initialState: OrdersState = {
	orders: orders || [],
}

export const ordersSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		addOrder: (state, action: PayloadAction<OrderInterface>) => {
			state.orders.push(action.payload)
		},
		changeOrderStatus: (
			state,
			action: PayloadAction<{ orderId: string; newStatus: OrderStatus }>
		) => {},
	},
})

// Action creators are generated for each case reducer function
export const ordersActions = ordersSlice.actions
export const ordersReducer = ordersSlice.reducer
