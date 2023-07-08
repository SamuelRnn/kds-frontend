import { OrderItem } from '@/interfaces/order.interface'
import { styled } from 'styled-components'

const StyledOrderPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
`

interface Props {
	items: OrderItem[]
}

export default function AddonsSelector({ items }: Props) {
	return (
		<StyledOrderPreviewContainer>
			{items.map((item) => (
				<p key={item.id}>
					{item.name} x{item.quantity}
				</p>
			))}
		</StyledOrderPreviewContainer>
	)
}
