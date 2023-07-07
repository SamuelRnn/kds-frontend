import Link from 'next/link'
import { styled } from 'styled-components'
import { StyledBaseNavItem } from '../_common/common-styles'

const StyledNavItem = styled(StyledBaseNavItem)`
	&[data-active='true'] {
		color: var(--colors-ghost-white);
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
	href?: string
	label: string
	icon: React.ReactNode
	active?: boolean
	isButton?: boolean
	onClick?: () => void
}
export default function NavItem({ href, label, icon, active, isButton = false, onClick }: Props) {
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
				<StyledNavItem data-active={active}>
					{icon}
					<span>{label}</span>

					<StyledActiveIndicator data-active={active} />
				</StyledNavItem>
			</Link>
		)
}
