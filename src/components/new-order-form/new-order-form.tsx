import { styled } from 'styled-components'
import { menu } from '@public/menu.json'
import TableSelector from './table-selector'
import MenuSelector from './menu-selector'

const StyledForm = styled.form`
	width: min(95%, 1200px);
	background-color: var(--colors-lightning-black-800);
	height: 1000px;
	margin: 0 auto;
	border-radius: var(--radius-box);
	margin-bottom: 7rem;
`
const StyledTitleBar = styled.label`
	padding: 1rem;
`
const StyledFormLayout = styled.div`
	display: grid;
	grid-template-columns: 4fr 2fr;
	gap: 1rem;
	padding: 1rem;
`
const StyledSelectionsContainer = styled.div`
	border: 1px solid white;
`
const StyledSection = styled.section``
const StyledLabel = styled.label``

interface Props {}

export default function NewOrderForm({}: Props) {
	const MAX_TABLES: number = 15

	return (
		<StyledForm>
			<StyledTitleBar>aqui va el Titulo</StyledTitleBar>

			<StyledFormLayout>
				<StyledSelectionsContainer>
					<StyledSection>
						<StyledLabel>Select a table</StyledLabel>
						<TableSelector onSelect={() => ''} maxTables={MAX_TABLES} />
					</StyledSection>

					<StyledSection>
						<StyledLabel>Add items to the order</StyledLabel>
						<MenuSelector menu={menu} onSelect={() => ''} />
					</StyledSection>
				</StyledSelectionsContainer>

				<div>Here addons</div>
			</StyledFormLayout>
			<div>here buttons idk</div>
		</StyledForm>
	)
}
