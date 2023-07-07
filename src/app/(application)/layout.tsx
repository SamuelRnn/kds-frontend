'use client'

import AppLayout from '@/components/app-layout'
import { styled } from 'styled-components'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import FormModal from '@/components/new-order-form/form-modal'
interface Props {
	children: React.ReactNode
}

const StyledPageContainer = styled.div`
	height: 100vh;
	/* display: flex; */
	/* flex-direction: column; */
	overflow-y: scroll;
`
const StyledPortalContainer = styled.div``
const StyledPage = styled.main`
	height: auto;
`

export default function Layout({ children }: Props) {
	return (
		<Provider store={store}>
			<AppLayout>
				<StyledPageContainer>
					<StyledPage>{children}</StyledPage>
				</StyledPageContainer>
			</AppLayout>

			<StyledPortalContainer id='portal'>
				<FormModal />
			</StyledPortalContainer>
		</Provider>
	)
}
