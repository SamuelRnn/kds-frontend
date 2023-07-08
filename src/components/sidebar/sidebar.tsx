import { styled } from 'styled-components'
import Logo from './logo'
import { useMemo, useState } from 'react'
import { BsFillClipboardPlusFill } from 'react-icons/bs'
import { FaConciergeBell } from 'react-icons/fa'
import NavItem from './nav-item'
import { statusMap } from '@/helpers/status-data-map'
import { createPortal } from 'react-dom'
import Form from '@/components/new-order-form/form-modal'
import useOrdersStore from '@/hooks/use-orders-store'
import useFilterStore from '@/hooks/use-filter-store'
import { FilterState } from '@/store/filter-slice'

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
	const { filter, changeFilter } = useFilterStore()

	const getOrdersLengthByFilter = (filterString: string) => {
		return orders.filter((order) => filterString.includes(order.status)).length
	}
	const navLinks = useMemo(
		() => [
			{
				label: 'Active',
				id: 'active',
				icon: <FaConciergeBell />,
				active: filter === 'active',
				matchOrdersCount: getOrdersLengthByFilter('pending-progress'),
			},
			{
				label: 'Done',
				id: 'done',
				icon: statusMap['done'].icon,
				active: filter === 'done',
				matchOrdersCount: getOrdersLengthByFilter('done'),
			},
			{
				label: 'Canceled',
				id: 'canceled',
				icon: statusMap['canceled'].icon,
				active: filter === 'canceled',
				matchOrdersCount: getOrdersLengthByFilter('canceled'),
			},
		],
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[filter, orders]
	)

	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<>
			<StyledSidebarContainer>
				<Logo />

				<StyledNavBlankSpace />

				<StyledNavbar>
					{navLinks.map((props) => (
						<NavItem
							key={props.label}
							isFilter
							{...props}
							onClick={() => changeFilter(props.id as FilterState)}
						/>
					))}

					<StyledNavBlankSpace />

					<NavItem
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
