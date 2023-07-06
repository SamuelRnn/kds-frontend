import badgesMap from '@/helpers/get-status-label'
import getFormattedTime from '@/helpers/get-formatted-time'
import { OrderInterface, OrderStatus } from '@/interfaces/order.interface'
import { css, styled } from 'styled-components'

const StyledOrderCardContainer = styled.div`
	background-color: var(--colors-lightning-black-800);
	padding: 0.5rem;
	margin-bottom: var(--masonry-gap);
	break-inside: avoid;
`
const StyledCardTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const StyledStatusBadge = styled.span<{ status: OrderStatus }>`
	${(props) => css`
		--current-status-color: var(--status-${props.status});
	`}
	color: var(--current-status-color);
	border: 1px solid var(--current-status-color);
	border-radius: 10rem;
	padding: 0.25rem 0.75rem;
`

interface Props {
	orderData: OrderInterface
}
export default function Order({ orderData }: Props) {
	return (
		<StyledOrderCardContainer>
			<StyledCardTitleContainer>
				Mesa {orderData.table} - {getFormattedTime(orderData.orderTime)}
				<StyledStatusBadge status={orderData.status}>
					{badgesMap(orderData.status)}
				</StyledStatusBadge>
			</StyledCardTitleContainer>
		</StyledOrderCardContainer>
	)
}
