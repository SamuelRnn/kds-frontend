import Link from 'next/link'
import { styled, css } from 'styled-components'

const StyledNavItem = styled.div<{ active: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 2rem;
	gap: 0.3rem;
	padding: 0.5rem;
	position: relative;
	transition: color ease-out 100ms;

	${({ active }) =>
		active
			? css`
					color: var(--colors-ghost-white);
			  `
			: css`
					color: var(--colors-raisin-gray);
			  `}

	& span {
		font-size: 1rem;
	}
`
const StyledActiveIndicator = styled.div<{ active: boolean }>`
	position: absolute;
	top: 0;
	left: 0;
	width: 4px;
	height: 100%;
	border-radius: 0 10px 10px 0;
	background-color: var(--colors-raisin-gray);
	transition: opacity ease-out 100ms;

	opacity: ${({ active }) => (active ? 1 : 0)};
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
			<StyledNavItem active={active}>
				{icon}
				<span>{label}</span>

				<StyledActiveIndicator active={active} />
			</StyledNavItem>
		</Link>
	)
}
