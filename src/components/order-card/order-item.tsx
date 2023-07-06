import { OrderItem } from '@/interfaces/order.interface'
import { styled } from 'styled-components'

const StyledListItemContainer = styled.div`
	border-bottom: 1px solid rgb(255 255 255 / 0.1);
	min-width: 320px;
	&:last-of-type {
		border-bottom: none;
	}
`
const StyledItemTitle = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.25rem 0;
	& > p {
		color: var(--colors-raisin-black);
	}
`
const StyledModsContainer = styled.div`
	padding-left: 0.75rem;
`
const StyledMod = styled.div`
	&[data-variant='addon'] {
		color: var(--colors-cambridge-green);
	}
	&[data-variant='exclusion'] {
		color: var(--colors-persian-red);
	}
`
interface Props {
	item: OrderItem
}

export default function OrderListItem({ item }: Props) {
	return (
		<StyledListItemContainer>
			<StyledItemTitle>
				<p>{item.name}</p>
				<span>x{item.quantity}</span>
			</StyledItemTitle>

			<StyledModsContainer>
				{item.specialInstructions.addons.map((addon) => (
					<StyledMod key={addon} data-variant='addon'>
						+ {addon}
					</StyledMod>
				))}
				{item.specialInstructions.exclusions.map((exclusion) => (
					<StyledMod key={exclusion} data-variant='exclusion'>
						- {exclusion}
					</StyledMod>
				))}
			</StyledModsContainer>
		</StyledListItemContainer>
	)
}
