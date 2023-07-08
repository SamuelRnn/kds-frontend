import { styled } from 'styled-components'
import NewOrderFormWithRef from './new-order-form'
import { useRef } from 'react'

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

interface Props {
	closeModal: () => void
}
export default function Form({ closeModal }: Props) {
	const modalRef = useRef<HTMLFormElement | null>(null)

	const onClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
		if (!modalRef.current) return
		if (!modalRef.current.contains(event.target as Node)) {
			closeModal()
		}
	}

	return (
		<StyledFormContainer onClick={onClickOutside}>
			<NewOrderFormWithRef ref={modalRef} />
		</StyledFormContainer>
	)
}
