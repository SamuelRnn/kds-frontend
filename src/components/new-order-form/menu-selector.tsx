import { styled } from 'styled-components'
import { StyledBaseButton } from '../_common/common-styles'
import { MenuItem } from '@/interfaces/order.interface'

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

interface Props {
	menu: MenuItem[]
	onItemAdd: (menuItem: MenuItem) => void
}

export default function MenuSelector({ menu, onItemAdd }: Props) {
	return (
		<StyledMenuSelectorContainer>
			{menu.map((menuItem) => (
				<StyledMenuButton key={menuItem.id} onClick={() => onItemAdd(menuItem)} type='button'>
					{menuItem.name}
				</StyledMenuButton>
			))}
		</StyledMenuSelectorContainer>
	)
}
