import { menu } from '@public/menu.json'
import TableSelector from './table-selector'
import MenuSelector from './menu-selector'
import {
	StyledFirstColumn,
	StyledForm,
	StyledFormLayout,
	StyledLabel,
	StyledOrderSection,
	StyledSecondColumn,
	StyledSection,
	StyledTitleBar,
} from './styles'
import { useState } from 'react'
import { MenuItem, OrderItem } from '@/interfaces/order.interface'
import AddonsSelector from './addons-selector'

interface Props {}

export default function NewOrderForm({}: Props) {
	const MAX_TABLES: number = 15

	const [orderItems, setOrderItems] = useState<OrderItem[]>([])
	const [tableNumber, setTableNumber] = useState<null | number>(null)

	const onItemAdd = (item: MenuItem) => {
		let orderItemsClone = [...orderItems]

		const previousExistingItem = orderItemsClone.find((currentItem) => {
			return currentItem.id === item.id
		})

		if (previousExistingItem) {
			previousExistingItem.quantity++
		} else {
			const newOrderItem: OrderItem = {
				id: item.id,
				name: item.name,
				quantity: 1,
				specialInstructions: {
					addons: [],
					exclusions: [],
				},
			}
			orderItemsClone.push(newOrderItem)
		}

		setOrderItems(orderItemsClone)
	}

	return (
		<StyledForm>
			<StyledTitleBar>aqui va el Titulo</StyledTitleBar>

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
						<AddonsSelector items={orderItems} />
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
