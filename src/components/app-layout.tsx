import { styled } from 'styled-components'

import Sidebar from './sidebar'

const StyledAppContainer = styled.div`
	display: grid;
	grid-template-columns: max-content auto;
	height: 100vh;
	overflow-y: hidden;
`

interface Props {
	children: React.ReactNode
}

export default function AppLayout({ children }: Props) {
	return (
		<StyledAppContainer id='app'>
			<Sidebar />
			{children}
		</StyledAppContainer>
	)
}
