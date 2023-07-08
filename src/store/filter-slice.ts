import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type FilterState = 'active' | 'done' | 'canceled'
const initialState = {
	selection: 'active',
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeSelection: (state, action: PayloadAction<FilterState>) => {
			state.selection = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const filterActions = filterSlice.actions
export const filterReducer = filterSlice.reducer
