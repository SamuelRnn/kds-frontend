import { styled } from 'styled-components'
import Logo from './logo'
import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { BsFillClipboardPlusFill } from 'react-icons/bs'
import { FaConciergeBell } from 'react-icons/fa'
import NavItem from './nav-item'
import { statusMap } from '@/helpers/status-data-map'

const StyledSidebarContainer = styled.div`
	width: 8rem;
	height: 100%;
	background-color: var(--colors-lightning-black-800);
`
const StyledNavbar = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 0;
	gap: 1.5rem;
`
export default function Sidebar() {
	const pathname = usePathname()
	const navLinks = useMemo(
		() => [
			{
				href: '/',
				label: 'Active',
				icon: <FaConciergeBell />,
				active: pathname === '/',
			},
			{
				href: '/done-orders',
				label: 'Done',
				icon: statusMap['done'].icon,
				active: pathname === '/done-orders',
			},
			{
				href: '/canceled-orders',
				label: 'Canceled',
				icon: statusMap['canceled'].icon,
				active: pathname === '/canceled-orders',
			},
			{
				href: '/new-order',
				label: 'New order',
				icon: <BsFillClipboardPlusFill />,
				active: pathname === '/new-order',
			},
		],
		[pathname]
	)

	return (
		<StyledSidebarContainer>
			<Logo />

			<StyledNavbar>
				{navLinks.map(({ href, label, icon, active }) => (
					<NavItem key={href} href={href} icon={icon} label={label} active={active} />
				))}
			</StyledNavbar>
		</StyledSidebarContainer>
	)
}
