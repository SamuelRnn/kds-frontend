import { styled } from 'styled-components'
import { StyledBaseButton } from '../_common/common-styles'
import { menu } from '@public/menu.json'
import useOrderFormContext from '@/hooks/use-new-order-context'

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

export default function MenuSelector() {
	const { addNewItemToOrder } = useOrderFormContext()
	return (
		<StyledMenuSelectorContainer>
			{menu.map((menuItem) => (
				<StyledMenuButton
					key={menuItem.id}
					onClick={() => addNewItemToOrder(menuItem)}
					type='button'
				>
					{menuItem.name}
				</StyledMenuButton>
			))}
		</StyledMenuSelectorContainer>
	)
}
