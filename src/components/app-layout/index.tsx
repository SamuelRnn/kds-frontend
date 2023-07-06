import { StyledAppContainer } from './styles'

import Sidebar from '../sidebar'

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
