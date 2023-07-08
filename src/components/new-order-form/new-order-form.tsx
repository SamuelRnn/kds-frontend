import TableSelector from './table-selector'
import MenuSelector from './menu-selector'
import {
	StyledFirstColumn,
	StyledForm,
	StyledFormLayout,
	StyledLabel,
	StyledModalControls,
	StyledOrderSection,
	StyledSecondColumn,
	StyledSection,
	StyledTitleBar,
} from './styles'
import { forwardRef } from 'react'
import OrderExtrasSelector from './order-extras-selector'
import { StyledBaseButton } from '../_common/common-styles'
import useOrderFormContext from '@/hooks/use-new-order-context'

interface Props {
	closeModal: () => void
}

function NewOrderForm({ closeModal }: Props, ref: React.Ref<HTMLFormElement>) {
	const { submitHandler } = useOrderFormContext()
	return (
		<StyledForm
			ref={ref}
			onSubmit={(event: React.FormEvent<HTMLFormElement>) => submitHandler(event, closeModal)}
		>
			<StyledTitleBar>
				<p>New Order</p>
				<StyledModalControls>
					<StyledBaseButton type='button' onClick={closeModal}>
						Cancel
					</StyledBaseButton>
					<StyledBaseButton type='submit'>Create New Order</StyledBaseButton>
				</StyledModalControls>
			</StyledTitleBar>

			<StyledFormLayout>
				{/* first column */}
				<StyledFirstColumn>
					<StyledSection>
						<StyledLabel>Select a table</StyledLabel>
						<TableSelector />
					</StyledSection>

					<StyledOrderSection>
						<StyledLabel>Your Order</StyledLabel>
						<OrderExtrasSelector />
					</StyledOrderSection>
				</StyledFirstColumn>

				{/* second column */}
				<StyledSecondColumn>
					<StyledSection>
						<StyledLabel>Add items to the order</StyledLabel>
						<MenuSelector />
					</StyledSection>
				</StyledSecondColumn>
			</StyledFormLayout>
		</StyledForm>
	)
}

const NewOrderFormWithRef = forwardRef(NewOrderForm)
export default NewOrderFormWithRef
