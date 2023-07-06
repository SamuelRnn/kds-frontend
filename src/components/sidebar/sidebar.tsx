import { styled } from 'styled-components'

const StyledSidebarContainer = styled.div`
	width: 8rem;
	height: 100%;
	background-color: var(--colors-lightning-black-800);
`

interface Props {}

export default function Sidebar({}: Props) {
	return <StyledSidebarContainer>this is the side</StyledSidebarContainer>
}
