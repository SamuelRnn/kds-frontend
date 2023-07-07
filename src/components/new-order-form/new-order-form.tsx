import { menu } from '@public/menu.json'
import TableSelector from './table-selector'
import MenuSelector from './menu-selector'
import {
	StyledForm,
	StyledFormLayout,
	StyledLabel,
	StyledLayoutColumnContainer,
	StyledMenuContainer,
	StyledSection,
	StyledTitleBar,
} from './styles'
import { useState } from 'react'
import { OrderItem } from '@/interfaces/order.interface'

interface Props {}

export default function NewOrderForm({}: Props) {
	const MAX_TABLES: number = 15

	const [orderItems, setOrderItems] = useState<OrderItem[]>([])
	const [tableNumber, setTableNumber] = useState<null | number>(null)

	return (
		<StyledForm>
			<StyledTitleBar>aqui va el Titulo</StyledTitleBar>

			<StyledFormLayout>
				<StyledLayoutColumnContainer>
					<StyledSection>
						<StyledLabel>Select a table</StyledLabel>
						<TableSelector onSelect={() => ''} maxTables={MAX_TABLES} />
					</StyledSection>

					<StyledSection>
						<StyledLabel>Your Order</StyledLabel>
					</StyledSection>
				</StyledLayoutColumnContainer>

				<StyledMenuContainer>
					<StyledSection>
						<StyledLabel>Add items to the order</StyledLabel>
						<MenuSelector menu={menu} onSelect={() => ''} />
					</StyledSection>
				</StyledMenuContainer>
			</StyledFormLayout>
			<div>here buttons idk</div>
		</StyledForm>
	)
}
