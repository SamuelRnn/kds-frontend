import { useState } from 'react'
import { styled } from 'styled-components'
import { StyledBaseButton } from '../_common/common-styles'
import useOrderFormContext from '@/hooks/use-new-order-context'

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

export default function TableSelector() {
	const { tables, tableNumber: selectedTable, selectTableNumber } = useOrderFormContext()
	return (
		<StyledTableSelectorWrapper>
			{tables.map((table) => (
				<StyledButton
					key={table}
					onClick={() => selectTableNumber(table)}
					data-selected={selectedTable === table}
					type='button'
				>
					Table {table}
				</StyledButton>
			))}
		</StyledTableSelectorWrapper>
	)
}
