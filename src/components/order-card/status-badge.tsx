import getStatusLabel from '@/helpers/get-status-label'
import { OrderStatus } from '@/interfaces/order.interface'
import { styled } from 'styled-components'
import { BiLoaderAlt } from 'react-icons/bi'
import { AiFillClockCircle } from 'react-icons/ai'
import { BsXLg } from 'react-icons/bs'
import { MdOutlineDone } from 'react-icons/md'

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
const AnimatedProgresssIcon = styled(BiLoaderAlt)`
	@keyframes rotate {
		0% {
			rotate: 0deg;
		}
		100% {
			rotate: 360deg;
		}
	}
	animation-name: rotate;
	animation-duration: 1.2s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`

const statusIconsMap = {
	progress: <AnimatedProgresssIcon />,
	pending: <AiFillClockCircle />,
	canceled: <BsXLg />,
	done: <MdOutlineDone />,
}

interface Props {
	status: OrderStatus
}

export default function Badge({ status }: Props) {
	return (
		<StyledStatusBadge data-variant={status}>
			{getStatusLabel(status)}
			{statusIconsMap[status]}
		</StyledStatusBadge>
	)
}
