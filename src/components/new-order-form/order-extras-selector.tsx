import { OrderItem } from '@/interfaces/order.interface'
import { styled } from 'styled-components'
import FormOrderItem from './form-order-item'
import useOrderFormContext from '@/hooks/use-new-order-context'

const StyledOrderPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
`

export default function OrderExtrasSelector() {
	const { orderItems: items } = useOrderFormContext()
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
