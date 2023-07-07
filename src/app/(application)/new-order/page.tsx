'use client'
import { StyledPageTitle } from '@/components/_common/common-styles'
import { styled } from 'styled-components'

const StyledFormContainer = styled.div`
	width: 100%;
	display: grid;
	place-content: center;
`

interface Props {}

export default function OrderPage({}: Props) {
	return (
		<>
			<StyledPageTitle>New order</StyledPageTitle>
			<StyledFormContainer>here the form</StyledFormContainer>
		</>
	)
}
