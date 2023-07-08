import { OrderItem } from '@/interfaces/order.interface'
import { styled } from 'styled-components'
import { StyledBaseButton } from '../_common/common-styles'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const StyledContainer = styled.div`
	width: 100%;
`

const StyledItemWrapper = styled.div`
	display: flex;
	gap: 1rem;
	margin-right: 1rem;
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

	& > p {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
`
const StyledQuantityContainer = styled(StyledSectionContainer)`
	background-color: var(--colors-ucla-blue);

	& span {
		font-weight: bold;
		width: 3rem;
		text-align: center;
	}
`
const StyledQuantityButton = styled(StyledBaseButton)`
	background-color: transparent;
	padding: 0 0.75rem;

	& svg {
		font-size: 1.25rem;
		margin: 0.75rem;
	}
`

const StyledInstructionButtonsContainer = styled(StyledSectionContainer)`
	padding: 0;
	background-color: transparent;
	gap: 1rem;
`
const StyledInstructionButton = styled(StyledBaseButton)`
	height: 100%;
	padding: 0 0.75rem;

	&[data-instruction='addon'] {
		background-color: var(--colors-cambridge-green);
		color: var(--colors-lightning-black-800);
	}
	&[data-instruction='exclusion'] {
		background-color: var(--colors-persian-red);
	}
`
interface Props {
	item: OrderItem
}

export default function FormOrderItem({ item }: Props) {
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

					<StyledQuantityButton type='button'>
						<AiOutlinePlus />
					</StyledQuantityButton>

					<StyledSeparator />

					<StyledQuantityButton type='button'>
						<AiOutlineMinus />
					</StyledQuantityButton>
				</StyledQuantityContainer>

				<StyledInstructionButtonsContainer>
					<StyledInstructionButton type='button' data-instruction='addon'>
						include addon
					</StyledInstructionButton>
					<StyledInstructionButton type='button' data-instruction='exclusion'>
						include exclusion
					</StyledInstructionButton>
				</StyledInstructionButtonsContainer>
			</StyledItemWrapper>

			{/* second line (addons) */}
		</StyledContainer>
	)
}
