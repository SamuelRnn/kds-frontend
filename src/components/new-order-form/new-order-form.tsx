import { menu } from '@public/menu.json'
import TableSelector from './table-selector'
import MenuSelector from './menu-selector'
import {
	StyledFirstColumn,
	StyledFormLayout,
	StyledLabel,
	StyledOrderSection,
	StyledSecondColumn,
	StyledSection,
	StyledTitleBar,
} from './styles'
import { forwardRef, useState } from 'react'
import { MenuItem, OrderItem } from '@/interfaces/order.interface'
import OrderExtrasSelector from './order-extras-selector'
import { styled } from 'styled-components'

const StyledForm = styled.form`
	width: min(95%, 1200px);
	background-color: var(--colors-lightning-black-800);
	margin: 0 auto;
	border-radius: var(--radius-box);
	max-height: calc(100vh - 2rem);
	overflow-y: hidden;
	border: 1px solid var(--colors-lightning-black-700);
	display: flex;
	flex-direction: column;
`

interface Props {}

function NewOrderForm({}: Props, ref: React.Ref<HTMLFormElement>) {
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
		<StyledForm ref={ref}>
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
