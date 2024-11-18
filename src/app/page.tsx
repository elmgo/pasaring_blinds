'use client'
import Slideshow from '@/components/Slideshow'
import React, { useEffect, useState } from 'react'

export default function Page() {
	const [setLoading] = useState(true)
	const [setReady] = useState(true)

	return (
		<div>
			<div className={`h-screen animate-fadeIn duration-500`}>
				<Slideshow />
			</div>
		</div>
	)
}
