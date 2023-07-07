import { styled } from 'styled-components'
import { StyledBaseButton } from '../_common/common-styles'

const StyledMenuSelectorContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`
const StyledMenuButton = styled(StyledBaseButton)``

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
				<StyledMenuButton key={menuItem.id} onClick={() => onSelect(menuItem)}>
					{menuItem.name}
				</StyledMenuButton>
			))}
		</StyledMenuSelectorContainer>
	)
}
