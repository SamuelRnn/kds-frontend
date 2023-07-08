import { OrderItem } from '@/interfaces/order.interface'
import { styled } from 'styled-components'
import { StyledBaseButton } from '../_common/common-styles'
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import useOrderFormContext from '@/hooks/use-new-order-context'
import { useRef, useState } from 'react'

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
const StyledInstructionButton = styled(StyledButton)`
	height: 100%;
	& > span {
		width: 80px;
	}
`
const StyledInstructionsColumn = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 2rem;
	position: relative;
	gap: 1rem;
	font-size: 0.875rem;
`
const StyledInstruction = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	height: 2rem;

	&[data-type='addon'] {
		color: var(--colors-cambridge-green);
	}
	&[data-type='exclusion'] {
		color: var(--colors-persian-red);
	}
	& > button {
		color: var(--colors-ghost-white);
	}
`
const StyledLine = styled.div`
	position: absolute;
	height: 100%;
	width: 2px;
	top: 0;
	left: 1.25rem;
	background-color: var(--colors-lightning-black-700);
`
const StyledInstructionsAdderContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`
const StyledInput = styled.input`
	flex-grow: 1;
	background-color: transparent;
	padding: 0.5rem;
	border-radius: var(--radius-box);
	outline: none;
	border: 1px solid var(--colors-lightning-black-700);
	&:focus {
		border-color: var(--colors-raisin-gray);
	}
	&::placeholder {
		color: var(--colors-raisin-gray);
	}
`

interface Props {
	item: OrderItem
}

export default function FormOrderItem({ item }: Props) {
	const inputRef = useRef<HTMLInputElement | null>(null)
	const [isInputActive, setIsInputActive] = useState(false)
	const [subGroup, setSubGroup] = useState<'addons' | 'exclusions'>('addons')
	const {
		removeItemFromOrder,
		changeItemQuantity,
		addAddon,
		addExclusion,
		removeAddon,
		removeExclusion,
	} = useOrderFormContext()

	const toggleSubGroup = () => {
		if (subGroup === 'addons') {
			setSubGroup('exclusions')
		}
		if (subGroup === 'exclusions') {
			setSubGroup('addons')
		}
	}
	const onAddInstruction = () => {
		if (!inputRef.current) return
		if (subGroup === 'addons') {
			addAddon(item.id, inputRef.current.value)
		}
		if (subGroup === 'exclusions') {
			addExclusion(item.id, inputRef.current.value)
		}
		inputRef.current.value = ''
	}

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

				<StyledButton
					type='button'
					data-text
					onClick={() => !isInputActive && setIsInputActive(true)}
				>
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
			<StyledInstructionsColumn>
				{/* blank space */}
				{(!!item.specialInstructions.addons.length ||
					!!item.specialInstructions.exclusions.length ||
					isInputActive) && <div style={{ visibility: 'hidden' }} />}

				{item.specialInstructions.addons.map((addon) => (
					<StyledInstruction data-type='addon' key={addon}>
						<p>+ {addon}</p>
						<StyledInstructionButton
							type='button'
							data-text
							data-action='remove'
							onClick={() => removeAddon(item.id, addon)}
						>
							Eliminar
						</StyledInstructionButton>
					</StyledInstruction>
				))}
				{item.specialInstructions.exclusions.map((exclusion) => (
					<StyledInstruction data-type='exclusion' key={exclusion}>
						<p>- {exclusion}</p>
						<StyledInstructionButton
							type='button'
							data-text
							data-action='remove'
							onClick={() => removeExclusion(item.id, exclusion)}
						>
							Eliminar
						</StyledInstructionButton>
					</StyledInstruction>
				))}
				{isInputActive && (
					<StyledInstructionsAdderContainer>
						<StyledInput ref={inputRef} placeholder='Add some instructions' />

						<StyledInstructionButton
							data-text
							data-action='remove'
							type='button'
							onClick={() => setIsInputActive(false)}
						>
							Cancel
						</StyledInstructionButton>

						<StyledInstructionButton data-text type='button' onClick={onAddInstruction}>
							Add
						</StyledInstructionButton>
						<StyledInstructionButton type='button' data-text onClick={() => toggleSubGroup()}>
							Group: <span>{subGroup}</span>
						</StyledInstructionButton>
					</StyledInstructionsAdderContainer>
				)}

				{/* line - property indicator */}
				{(!!item.specialInstructions.addons.length ||
					!!item.specialInstructions.exclusions.length ||
					isInputActive) && <StyledLine />}
			</StyledInstructionsColumn>
		</StyledContainer>
	)
}
