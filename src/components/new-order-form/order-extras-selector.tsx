import { OrderItem } from '@/interfaces/order.interface'
import { styled } from 'styled-components'
import FormOrderItem from './form-order-item'

const StyledOrderPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`

interface Props {
	items: OrderItem[]
}

export default function OrderExtrasSelector({ items }: Props) {
	return (
		<StyledOrderPreviewContainer>
			{items.length ? (
				items.map((item) => <FormOrderItem key={item.id} item={item} />)
			) : (
				<p>No items yet</p>
			)}
		</StyledOrderPreviewContainer>
	)
}
