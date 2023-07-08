import { OrderStatus } from '@/interfaces/order.interface'
import { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'

const StyledSpan = styled.span`
	color: var(--colors-raisin-gray);
	user-select: none;
`

interface Props {
	orderDate: string
	status: OrderStatus
}

export default function Counter({ orderDate, status }: Props) {
	const orderDateRef = useRef(new Date(orderDate).getTime())

	const [seconds, setseconds] = useState(
		'done-canceled'.includes(status)
			? 0
			: Math.floor((new Date().getTime() - orderDateRef.current) / 1000)
	)

	useEffect(() => {
		if ('done-canceled'.includes(status)) return

		const interval = setInterval(() => {
			setseconds((prevSeconds) => prevSeconds + 1)
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [seconds, status])

	return <StyledSpan title='time elapsed'>{formatTime(seconds)}</StyledSpan>
}

function formatTime(seconds: number) {
	const hours = Math.floor(seconds / 3600)
	const minutes = Math.floor((seconds % 3600) / 60)
	const remainingSeconds = seconds % 60

	const formattedHours = String(hours).padStart(2, '0')
	const formattedMinutes = String(minutes).padStart(2, '0')
	const formattedSeconds = String(remainingSeconds).padStart(2, '0')

	return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}
