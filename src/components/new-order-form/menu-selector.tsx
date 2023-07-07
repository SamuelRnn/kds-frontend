import { styled } from 'styled-components'
import { StyledBaseButton } from '../_common/common-styles'

const StyledMenuSelectorContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1.25rem;
	margin-right: 1rem;
`
const StyledMenuButton = styled(StyledBaseButton)`
	font-size: 0.875rem;
	padding: 0.75rem;
`

interface MenuItem {
	id: string
	name: string
}

interface Props {
	menu: MenuItem[]
	onSelect: (menuItem: MenuItem) => void
}

export default function MenuSelector({ menu, onSelect }: Props) {
	return (
		<StyledMenuSelectorContainer>
			{menu.map((menuItem) => (
				<StyledMenuButton key={menuItem.id} onClick={() => onSelect(menuItem)} type='button'>
					{menuItem.name}
				</StyledMenuButton>
			))}
		</StyledMenuSelectorContainer>
	)
}
