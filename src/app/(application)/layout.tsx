'use client'

import AppLayout from '@/components/app-layout'
import { styled } from 'styled-components'

interface Props {
	children: React.ReactNode
}

const StyledPageContainer = styled.main`
	height: 100vh;
	overflow-y: scroll;
	padding: 1rem;
`

export default function Layout({ children }: Props) {
	return (
		<AppLayout>
			<StyledPageContainer>{children}</StyledPageContainer>
		</AppLayout>
	)
}
