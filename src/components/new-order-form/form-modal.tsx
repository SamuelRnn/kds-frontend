import { styled } from 'styled-components'
import NewOrderForm from './new-order-form'

const StyledFormContainer = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 100vh;
	background-color: rgb(0 0 0 / 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 50;
`

interface Props {}

export default function FormModal({}: Props) {
	return (
		<StyledFormContainer>
			<NewOrderForm />
		</StyledFormContainer>
	)
}
