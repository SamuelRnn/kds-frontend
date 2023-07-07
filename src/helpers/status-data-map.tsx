import { AiFillClockCircle } from 'react-icons/ai'
import { BiLoaderAlt } from 'react-icons/bi'
import { BsXLg } from 'react-icons/bs'
import { MdOutlineDone } from 'react-icons/md'
import { styled } from 'styled-components'

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
export const statusMap = {
	done: {
		label: 'Done',
		icon: <MdOutlineDone />,
	},
	progress: {
		label: 'In Progress',
		icon: <AnimatedProgresssIcon />,
	},
	pending: {
		label: 'Pending',
		icon: <AiFillClockCircle />,
	},
	canceled: {
		label: 'Canceled',
		icon: <BsXLg />,
	},
}
