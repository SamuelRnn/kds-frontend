import { styled } from 'styled-components'
import { FaKitchenSet } from 'react-icons/fa6'

const StyledSidebarContainer = styled.div`
	width: 8rem;
	height: 100%;
	background-color: var(--colors-lightning-black-800);
`
const StyledLogoWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	padding: 1rem 0;
	font-size: 0.875rem;
	font-weight: bolder;
	text-transform: uppercase;
	letter-spacing: 0.125rem;
	user-select: none;
	& svg {
		font-size: 3rem;
	}
	& span {
		color: var(--colors-raisin-gray);
	}
`
const StyledSidebarSeparator = styled.div`
	width: calc(100% - 1rem);
	margin: 0 auto;
	height: 1px;
	background-color: var(--colors-lightning-black-700);
`

interface Props {}

export default function Sidebar({}: Props) {
	return (
		<StyledSidebarContainer>
			<StyledLogoWrapper>
				<FaKitchenSet />
				<p>
					Simple <span>KDS</span>
				</p>
			</StyledLogoWrapper>

			<StyledSidebarSeparator />
		</StyledSidebarContainer>
	)
}
