import { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const StyledSpan = styled.span`
	color: var(--colors-raisin-gray);
	user-select: none;
`

interface Props {
	orderDate: string
}

export default function Counter({ orderDate }: Props) {
	const [seconds, setseconds] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setseconds((prevSeconds) => prevSeconds + 1)
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [seconds])

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
