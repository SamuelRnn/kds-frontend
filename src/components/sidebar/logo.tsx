import { FaKitchenSet } from 'react-icons/fa6'
import { styled } from 'styled-components'

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

interface Props {}

export default function Logo({}: Props) {
	return (
		<StyledLogoWrapper>
			<FaKitchenSet />
			<p>
				Simple <span>KDS</span>
			</p>
		</StyledLogoWrapper>
	)
}
