interface MenuItem {
	id: string
	name: string
}

interface Props {
	menu: MenuItem[]
	onSelect: (menuItem: MenuItem) => void
}

export default function MenuSelector({}: Props) {}
