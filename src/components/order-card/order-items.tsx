import { OrderItem } from '@/interfaces/order.interface'
import { useState } from 'react'
import { styled } from 'styled-components'
import OrderListItem from './order-item'
import { FiChevronDown } from 'react-icons/fi'

const StyledComponentWrapper = styled.div`
	margin-top: 0.75rem;
`
const StyledListLabel = styled.span`
	background-color: var(--colors-lightning-black-700);
	padding: 0.25rem 0.75rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: var(--radius-box);
	user-select: none;
`
const StyledListContainer = styled.div`
	overflow: hidden;
	padding: 0 0.75rem;
`
interface Props {
	items: OrderItem[]
}

export default function OrderItems({ items }: Props) {
	return (
		<StyledComponentWrapper>
			<StyledListLabel>
				<span>Items</span>
				<FiChevronDown />
			</StyledListLabel>

			<StyledListContainer>
				{items.map((item) => (
					<OrderListItem key={item.id} item={item} />
				))}
			</StyledListContainer>
		</StyledComponentWrapper>
	)
}
