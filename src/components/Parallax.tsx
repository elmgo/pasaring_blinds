import { ReactNode, useEffect, useRef, useState } from 'react'

export default function Parallax({
	bgUrl,
	children,
	className,
	speed = 0.2,
	offset = 0,
	bgSize,
}: {
	bgUrl: string
	children?: ReactNode
	className?: string
	offset?: number
	speed?: number
	bgSize?: string | number
}) {
	const bgRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (!bgRef.current) return
			const rect = bgRef.current.getBoundingClientRect()
			const scrollY = rect.top - offset
			bgRef.current.style.backgroundPositionY = `${
				scrollY * speed +
				(bgSize
					? bgRef.current.getBoundingClientRect().height / 2
					: 0) /
					2
			}px`
		}

		handleScroll() // Run initially to set position
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [offset, speed])

	return (
		<div
			ref={bgRef}
			className={`${className} ${bgSize} bg-cover h-screen relative  text-white text-3xl`}
			style={{
				backgroundImage: `url('${bgUrl}')`,
				backgroundPositionX: 'center',
				// ...(bgSize
				// 	? {
				// 			backgroundSize: bgSize,
				// 	  }
				// 	: {}),
			}}
		>
			{children}
		</div>
	)
}
