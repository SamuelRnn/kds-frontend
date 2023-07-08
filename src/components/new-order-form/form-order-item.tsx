import { OrderItem } from '@/interfaces/order.interface'
import { styled } from 'styled-components'
import { StyledBaseButton } from '../_common/common-styles'
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import useOrderFormContext from '@/hooks/use-new-order-context'

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 1rem;
`

const StyledItemWrapper = styled.div`
	display: flex;
	width: 100%;
	gap: 0.75rem;
`
const StyledSectionContainer = styled.div`
	background-color: var(--colors-lightning-black-700);
	border-radius: var(--radius-box);
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const StyledSeparator = styled.div`
	width: 2px;
	height: 100%;
	background-color: rgb(255 255 255 / 0.1);
`

const StyledItemNameContainer = styled(StyledSectionContainer)`
	flex-grow: 1;
	padding: 0 1rem;
	width: 300px;
	& > p {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
`
const StyledQuantityContainer = styled(StyledSectionContainer)`
	background-color: var(--colors-ucla-blue);

	& span {
		user-select: none;
		font-weight: bold;
		width: 3rem;
		text-align: center;
	}
`
const StyledButton = styled(StyledBaseButton)`
	background-color: var(--colors-ucla-blue);
	height: 3.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	aspect-ratio: 1/1;

	& > svg {
		font-size: 1.25rem;
	}
	&[data-action='remove'] {
		background-color: var(--colors-persian-red);
	}
	&[data-text='true'] {
		aspect-ratio: auto;
		white-space: nowrap;
	}
`
interface Props {
	item: OrderItem
}

export default function FormOrderItem({ item }: Props) {
	const { removeItemFromOrder, changeItemQuantity } = useOrderFormContext()
	return (
		<StyledContainer>
			{/* first line */}
			<StyledItemWrapper>
				<StyledItemNameContainer>
					<p>{item.name}</p>
				</StyledItemNameContainer>

				<StyledQuantityContainer>
					<span>x{item.quantity}</span>

					<StyledSeparator />

					<StyledButton type='button' onClick={() => changeItemQuantity(item.id, 'increase')}>
						<AiOutlinePlus />
					</StyledButton>

					<StyledSeparator />

					<StyledButton type='button' onClick={() => changeItemQuantity(item.id, 'decrease')}>
						<AiOutlineMinus />
					</StyledButton>
				</StyledQuantityContainer>

				<StyledButton type='button' data-text>
					Add instruction
				</StyledButton>
				<StyledButton
					type='button'
					data-action='remove'
					onClick={() => removeItemFromOrder(item.id)}
				>
					<AiFillDelete />
				</StyledButton>
			</StyledItemWrapper>

			{/* second line (addons) */}
		</StyledContainer>
	)
}
