import { ReactNode, useEffect, useRef, useState } from 'react'

export default function Parallax({
	bgUrl,
	children,
	className,
}: {
	bgUrl: string
	children?: ReactNode
	className?: string
}) {
	const bgRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (!bgRef.current) return
			bgRef.current.style.backgroundPositionY = `${
				window.scrollY * 0.5 - 200
			}px`
		}
		handleScroll()
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div
			ref={bgRef}
			className={`${className} h-screen relative bg-center bg-[150%] md:bg-center text-white text-3xl`}
			style={{
				backgroundImage: `url('${bgUrl}')`,
			}}
		>
			{children}
		</div>
	)
}
