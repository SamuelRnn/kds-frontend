import { FilterState, filterActions } from '@/store/filter-slice'
import { AppDispatch, RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'

export default function useOrdersStore() {
	const filter = useSelector((state: RootState) => state.filter.selection)
	const dispatch = useDispatch<AppDispatch>()

	return {
		filter,
		changeFilter: (label: FilterState) => {
			dispatch(filterActions.changeSelection(label))
		},
	}
}
