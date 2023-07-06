import '@/styles/preflight.css'
import '@/styles/globals.css'

import { Nunito_Sans } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'

const nunito = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
	title: 'Simple KDS',
	description:
		'Reto de Desarrollo Frontend en React.js para un Kitchen Display System (KDS) - Versión Simplificada',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={nunito.className}>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	)
}
