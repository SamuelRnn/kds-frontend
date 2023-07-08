import { configureStore } from '@reduxjs/toolkit'
import { ordersReducer } from './orders-slice'

export const store = configureStore({
	reducer: {
		orders: ordersReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
