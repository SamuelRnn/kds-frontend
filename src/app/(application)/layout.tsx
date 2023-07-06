'use client'

import AppLayout from '@/components/app-layout'

interface Props {
	children: React.ReactNode
}

export default function Layout({ children }: Props) {
	return <AppLayout>{children}</AppLayout>
}
