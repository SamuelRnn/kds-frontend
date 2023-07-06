import getStatusLabel from '@/helpers/get-status-label'
import { OrderStatus } from '@/interfaces/order.interface'
import { css, styled } from 'styled-components'

const StyledStatusBadge = styled.span`
	border-radius: 10rem;
	padding: 0.25rem 0.75rem;
	user-select: none;

	&[data-variant='pending'] {
		color: var(--status-pending);
		border: 1px solid var(--status-pending);
	}
	&[data-variant='canceled'] {
		color: var(--status-canceled);
		border: 1px solid var(--status-canceled);
	}
	&[data-variant='progress'] {
		color: var(--status-progress);
		border: 1px solid var(--status-progress);
	}
	&[data-variant='finished'] {
		color: var(--status-finished);
		border: 1px solid var(--status-finished);
	}
`

interface Props {
	status: OrderStatus
}

export default function Badge({ status }: Props) {
	return <StyledStatusBadge data-variant={status}>{getStatusLabel(status)}</StyledStatusBadge>
}
