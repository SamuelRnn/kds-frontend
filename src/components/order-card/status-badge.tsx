import { statusMap } from '@/helpers/status-data-map'
import { OrderStatus } from '@/interfaces/order.interface'
import { styled } from 'styled-components'

const StyledStatusBadge = styled.span`
	border-radius: 10rem;
	padding: 0.25rem 0.75rem;
	user-select: none;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	font-weight: normal;

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
	&[data-variant='done'] {
		color: var(--status-done);
		border: 1px solid var(--status-done);
	}
`

interface Props {
	status: OrderStatus
}

export default function Badge({ status }: Props) {
	return (
		<StyledStatusBadge data-variant={status}>
			{statusMap[status].label}
			{statusMap[status].icon}
		</StyledStatusBadge>
	)
}
