'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import cn from 'classnames'

const sections = [
	{
		label: 'Home',
		route: './',
	},
	{
		label: 'Blog',
		route: './products',
	},
	{
		label: 'Contact',
		route: './contact',
	},
]

export default function NavBar() {
	const pathName = usePathname()
	const [scrollY, setScrollY] = useState<number>(0)
	const isHome = pathName === '/'
	const atTop = scrollY === 0

	useEffect(() => {
		console.log('bla')
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	function onScroll() {
		console.log(window.scrollY)
		setScrollY(window.scrollY)
	}

	return (
		<div
			className={cn(
				'fixed z-20 w-full duration-300 h-100 px-100 flex items-center gap-[10%]',
				!atTop &&
					'bg-primary !h-[70px] text-white py-20 shadow-lg shadow-black/10',
				isHome && atTop && 'text-white bg-primary/0 border-none',
			)}
		>
			<Link
				href='./'
				className={`${isHome && atTop && 'block flex-1'} ${
					isHome &&
					atTop &&
					'[text-shadow:_0_5px_15px_rgb(0_0_0_/_20%)]'
				} w-[300px] duration-300 tracking-tighter flex-1 leading-[30px] text-[26px]`}
			>
				{/* <img src='/logo.svg' />
				 */}
				TEMP LOGO
			</Link>
			<div className='flex gap-40'>
				{sections.map((section) => (
					<div
						key={section.label}
						className={cn(
							`text-[13px] duration-150 border-b-[1px] font-secondary font-bold tracking-wider uppercase items-end flex ${
								pathName === '/'
									? 'hover:border-white border-white/0'
									: 'opacity-100 hover:border-black/50 border-black/0'
							}`,
							section.route === pathName && 'opacity-100',
						)}
					>
						<Link href={section.route}>{section.label}</Link>
					</div>
				))}
			</div>
		</div>
	)
}