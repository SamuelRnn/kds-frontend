import { StyledAppContainer } from './styles'

interface Props {
	children: React.ReactNode
}

export default function AppLayout({ children }: Props) {
	return (
		<StyledAppContainer id='app'>
			<aside>navbar</aside>
			{children}
		</StyledAppContainer>
	)
}
