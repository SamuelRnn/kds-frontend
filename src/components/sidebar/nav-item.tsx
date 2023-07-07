import Link from 'next/link'
import { styled, css } from 'styled-components'

const StyledNavItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 2rem;
	gap: 0.3rem;
	padding: 0.5rem;
	position: relative;
	transition: color ease-out 80ms;
	color: var(--colors-raisin-gray);

	&[data-active='true'] {
		color: var(--colors-ghost-white);
	}

	& span {
		font-size: 1rem;
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

interface Props {
	href: string
	label: string
	icon: React.ReactNode
	active: boolean
}
export default function NavItem({ href, label, icon, active }: Props) {
	return (
		<Link href={href}>
			<StyledNavItem data-active={active}>
				{icon}
				<span>{label}</span>

				<StyledActiveIndicator data-active={active} />
			</StyledNavItem>
		</Link>
	)
}
