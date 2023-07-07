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
	gap: 1rem;
`
const StyledButton = styled(StyledBaseButton)`
	width: 100px;
`

export default function TableSelector({ maxTables, onSelect }: Props) {
	const [selectedTable, selectTableNumber] = useState(null)
	return (
		<StyledTableSelectorWrapper>
			{Array.from({ length: maxTables }, (_, index) => index + 1).map((tableNumber) => (
				<StyledButton key={tableNumber} onClick={() => onSelect(tableNumber)}>
					Table {tableNumber}
				</StyledButton>
			))}
		</StyledTableSelectorWrapper>
	)
}
