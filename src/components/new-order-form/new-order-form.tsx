import { menu } from '@public/menu.json'
import TableSelector from './table-selector'
import MenuSelector from './menu-selector'
import {
	StyledFirstColumn,
	StyledForm,
	StyledFormLayout,
	StyledLabel,
	StyledModalControls,
	StyledOrderSection,
	StyledSecondColumn,
	StyledSection,
	StyledTitleBar,
} from './styles'
import { forwardRef, useState } from 'react'
import { MenuItem, OrderItem } from '@/interfaces/order.interface'
import OrderExtrasSelector from './order-extras-selector'
import { StyledBaseButton } from '../_common/common-styles'
import {
	createNewOrderItemFromMenuItem,
	findPreviousExistingOrderItemById,
	generateRandomOrderId,
} from './helpers'
import useOrdersStore from '@/hooks/use-orders-store'

interface Props {
	closeModal: () => void
}

function NewOrderForm({ closeModal }: Props, ref: React.Ref<HTMLFormElement>) {
	const { addOrder } = useOrdersStore()

	const MAX_TABLES: number = 14
	const [orderItems, setOrderItems] = useState<OrderItem[]>([])
	const [tableNumber, setTableNumber] = useState<null | number>(null)

	const onItemAdd = (item: MenuItem) => {
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
	const onSubmit = (event: React.FormEvent) => {
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
		closeModal()
	}
	return (
		<StyledForm ref={ref} onSubmit={onSubmit}>
			<StyledTitleBar>
				<p>New Order</p>
				<StyledModalControls>
					<StyledBaseButton type='button' onClick={closeModal}>
						Cancel
					</StyledBaseButton>
					<StyledBaseButton type='submit'>Create New Order</StyledBaseButton>
				</StyledModalControls>
			</StyledTitleBar>

			<StyledFormLayout>
				{/* first column */}
				<StyledFirstColumn>
					<StyledSection>
						<StyledLabel>Select a table</StyledLabel>
						<TableSelector
							onSelect={setTableNumber}
							maxTables={MAX_TABLES}
							selectedNumber={tableNumber}
						/>
					</StyledSection>

					<StyledOrderSection>
						<StyledLabel>Your Order</StyledLabel>
						<OrderExtrasSelector items={orderItems} />
					</StyledOrderSection>
				</StyledFirstColumn>

				{/* second column */}
				<StyledSecondColumn>
					<StyledSection>
						<StyledLabel>Add items to the order</StyledLabel>
						<MenuSelector menu={menu} onItemAdd={onItemAdd} />
					</StyledSection>
				</StyledSecondColumn>
			</StyledFormLayout>
			{/* <div>here buttons idk</div> */}
		</StyledForm>
	)
}

const NewOrderFormWithRef = forwardRef(NewOrderForm)
export default NewOrderFormWithRef
