import { useState } from 'react'
import { styled } from 'styled-components'
import { StyledBaseButton } from '../_common/common-styles'

interface Props {
	maxTables: number
	onSelect: (tableNumber: number) => void
}

const StyledTableSelectorWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 100px);
	place-content: start;
	column-gap: 1rem;
	row-gap: 1.25rem;
`
const StyledButton = styled(StyledBaseButton)`
	width: 100px;
	transition: 100ms ease-out;
	transition-property: background-color font-weight;
	font-size: 0.875rem;

	&[data-selected='true'] {
		background-color: var(--colors-ucla-blue);
		font-weight: bold;
	}
`

export default function TableSelector({ maxTables, onSelect }: Props) {
	const [selectedTable, selectTableNumber] = useState<null | number>(null)

	const selectHandler = (number: number) => {
		selectTableNumber(number)
		onSelect(number)
	}
	return (
		<StyledTableSelectorWrapper>
			{Array.from({ length: maxTables }, (_, index) => index + 1).map((tableNumber) => (
				<StyledButton
					key={tableNumber}
					onClick={() => selectHandler(tableNumber)}
					data-selected={selectedTable === tableNumber}
					type='button'
				>
					Table {tableNumber}
				</StyledButton>
			))}
		</StyledTableSelectorWrapper>
	)
}
