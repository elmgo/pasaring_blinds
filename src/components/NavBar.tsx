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
		label: 'Products',
		route: './products',
	},
	{
		label: 'Gallery',
		route: './gallery',
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
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	function onScroll() {
		setScrollY(window.scrollY)
	}

	return (
		<div
			className={cn(
				'fixed bg-white border-b-[1px] z-20 w-screen duration-300 py-32 px-50 flex gap-[10%]',
				scrollY > 0 &&
					'!bg-white py-20 shadow-[0_5px_60px_rgba(0,0,0,0.07)]',
				isHome && atTop && 'text-white bg-white/0 border-none',
			)}
		>
			<Link
				href='./'
				className={`${
					isHome && atTop && 'invert grayscale brightness-0'
				} ${
					isHome && '[text-shadow:_0_5px_15px_rgb(0_0_0_/_20%)]'
				} w-[300px] duration-300 tracking-tighter flex-1 leading-[30px] text-[30px] font-bold`}
			>
				<img src='/logo.svg' />
			</Link>
			{sections.map((section) => (
				<div
					key={section.label}
					className={cn(
						`text-[13px] duration-150 border-b-[1px] font-secondary font-bold tracking-wider uppercase items-center flex ${
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
			<div className='w-[300px] tracking-tighter flex-1 leading-[30px] text-[30px] font-bold'></div>
		</div>
	)
}
