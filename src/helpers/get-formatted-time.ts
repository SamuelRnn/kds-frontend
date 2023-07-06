export default function getFormattedTime(dateString: string): string {
	const date = new Date(dateString)
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const ampm = hours >= 12 ? 'PM' : 'AM'
	const formattedHours = hours % 12 === 0 ? 12 : hours % 12
	const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
	const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`

	return formattedTime
}
