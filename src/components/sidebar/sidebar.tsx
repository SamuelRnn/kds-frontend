import { styled } from 'styled-components'
import Logo from './logo'
import { useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { BsFillClipboardPlusFill } from 'react-icons/bs'
import { FaConciergeBell } from 'react-icons/fa'
import NavItem from './nav-item'
import { statusMap } from '@/helpers/status-data-map'
import { createPortal } from 'react-dom'
import Form from '@/components/new-order-form/form-modal'

const StyledSidebarContainer = styled.div`
	width: 8rem;
	height: 100%;
	background-color: var(--colors-lightning-black-800);
`
const StyledNavbar = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`
const StyledNavBlankSpace = styled.div`
	visibility: hidden;
	height: 2rem;
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
		],
		[pathname]
	)

	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<>
			<StyledSidebarContainer>
				<Logo />

				<StyledNavBlankSpace />

				<StyledNavbar>
					{navLinks.map(({ href, label, icon, active }) => (
						<NavItem key={href} href={href} icon={icon} label={label} active={active} />
					))}

					<StyledNavBlankSpace />

					<NavItem
						isButton
						label='New order'
						onClick={() => setIsModalOpen(true)}
						icon={<BsFillClipboardPlusFill />}
					/>
				</StyledNavbar>
			</StyledSidebarContainer>

			{isModalOpen &&
				createPortal(
					<Form closeModal={() => setIsModalOpen(false)} />,
					document.getElementById('portal') as Element
				)}
		</>
	)
}
