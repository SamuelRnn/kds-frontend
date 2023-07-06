'use client'

import AppLayout from '@/components/app-layout'
import { styled } from 'styled-components'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
interface Props {
	children: React.ReactNode
}

const StyledPageContainer = styled.main`
	height: 100vh;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
`

export default function Layout({ children }: Props) {
	return (
		<Provider store={store}>
			<AppLayout>
				<StyledPageContainer>{children}</StyledPageContainer>
			</AppLayout>
		</Provider>
	)
}
