import getStatusLabel from '@/helpers/get-status-label'
import { OrderStatus } from '@/interfaces/order.interface'
import { css, styled } from 'styled-components'

const StyledStatusBadge = styled.span<{ status: OrderStatus }>`
	${(props) => css`
		--current-status-color: var(--status-${props.status});
	`}
	color: var(--current-status-color);
	border: 1px solid var(--current-status-color);
	border-radius: 10rem;
	padding: 0.25rem 0.75rem;
	user-select: none;
`

interface Props {
	status: OrderStatus
}

export default function Badge({ status }: Props) {
	return <StyledStatusBadge status={status}>{getStatusLabel(status)}</StyledStatusBadge>
}
