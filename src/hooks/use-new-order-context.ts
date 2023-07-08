import { FormContext, OrderFormContext } from '@/context/new-order-context'
import { useContext } from 'react'

export default function useOrderFormContext() {
	return useContext(OrderFormContext) as FormContext
}
