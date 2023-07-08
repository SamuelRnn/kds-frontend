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
import useOrdersStore from '@/hooks/use-orders-store'

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
	const { orders } = useOrdersStore()
	const pathname = usePathname()

	const getOrdersLengthByFilter = (filterString: string) => {
		return orders.filter((order) => filterString.includes(order.status)).length
	}
	const navLinks = useMemo(
		() => [
			{
				href: '/',
				label: 'Active',
				icon: <FaConciergeBell />,
				active: pathname === '/',
				matchOrdersCount: getOrdersLengthByFilter('pending-progress'),
			},
			{
				href: '/done-orders',
				label: 'Done',
				icon: statusMap['done'].icon,
				active: pathname === '/done-orders',
				matchOrdersCount: getOrdersLengthByFilter('done'),
			},
			{
				href: '/canceled-orders',
				label: 'Canceled',
				icon: statusMap['canceled'].icon,
				active: pathname === '/canceled-orders',
				matchOrdersCount: getOrdersLengthByFilter('canceled'),
			},
		],
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[pathname, orders]
	)

	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<>
			<StyledSidebarContainer>
				<Logo />

				<StyledNavBlankSpace />

				<StyledNavbar>
					{navLinks.map((props) => (
						<NavItem key={props.href} {...props} />
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
