import Link from 'next/link'
import { styled } from 'styled-components'

const StyledBaseNavItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 2rem;
	gap: 0.3rem;
	padding: 0.5rem;
	position: relative;
	transition: color ease-out 80ms;
	color: var(--colors-raisin-gray);

	& span {
		font-size: 1rem;
	}

	&:hover {
		transition: background-color ease-out 120ms;
		background-color: rgb(200 200 255 / 0.05);
	}

	&[data-active='true'] {
		color: var(--colors-ghost-white);
		font-weight: bold;
	}
`
const StyledActiveIndicator = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 4px;
	height: 100%;
	border-radius: 0 10px 10px 0;
	background-color: var(--colors-raisin-gray);
	transition: opacity ease-out 80ms;
	opacity: 0;

	&[data-active='true'] {
		opacity: 1;
	}
`
const StyledIconBox = styled.div`
	display: flex;
	gap: 0.25rem;
	align-items: center;
	position: relative;

	& > span[title='count'] {
		position: absolute;
		top: 50%;
		left: 60%;
		background-color: var(--colors-lightning-black-700);
		border-radius: var(--radius-box);
		padding: 0 0.4rem;
		text-align: center;
	}
`

interface Props {
	href?: string
	label: string
	icon: React.ReactNode
	active?: boolean
	isButton?: boolean
	onClick?: () => void
	matchOrdersCount?: number
}
export default function NavItem({
	href,
	label,
	icon,
	active,
	isButton = false,
	onClick,
	matchOrdersCount,
}: Props) {
	if (isButton && !href) {
		return (
			<button onClick={onClick}>
				<StyledBaseNavItem>
					{icon}
					<span>{label}</span>
				</StyledBaseNavItem>
			</button>
		)
	} else
		return (
			<Link href={href || '/'}>
				<StyledBaseNavItem data-active={active}>
					<StyledIconBox>
						{icon}
						<span title='count'>{matchOrdersCount}</span>
					</StyledIconBox>
					<span>{label}</span>

					<StyledActiveIndicator data-active={active} />
				</StyledBaseNavItem>
			</Link>
		)
}
