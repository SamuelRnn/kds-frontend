import { configureStore } from '@reduxjs/toolkit'
import { ordersReducer } from './orders-slice'
import { filterReducer } from './filter-slice'

export const store = configureStore({
	reducer: {
		orders: ordersReducer,
		filter: filterReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
