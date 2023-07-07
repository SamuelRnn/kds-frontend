'use client'
//------------------------------
// TODO: change it to a modal with portal
//------------------------------
import NewOrderForm from '@/components/new-order-form/new-order-form'
import { styled } from 'styled-components'

const StyledFormContainer = styled.div`
	width: 100%;
`

interface Props {}

export default function OrderPage({}: Props) {
	return (
		<>
			<StyledFormContainer>
				<NewOrderForm />
			</StyledFormContainer>
		</>
	)
}
