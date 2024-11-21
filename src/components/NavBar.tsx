'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode, useEffect, useState } from 'react'
import cn from 'classnames'
import throttle from '@/utils/throttle'
import isMobile from 'is-mobile'

const sections = [
	{
		label: 'Home',
		route: '/',
	},
	{
		label: 'Products',
	},
	{
		label: 'Blog',
		route: '/blog',
	},
	{
		label: 'Contact',
		route: '/contact',
	},
]

export default function NavBar() {
	const pathName = usePathname()
	const [scrollY, setScrollY] = useState<number>(0)
	const darkNav = pathName.includes('/blog/') || pathName.includes('/contact')
	const atTop = scrollY <= 5

	useEffect(() => {
		const func = throttle(onScroll, 20)

		window.addEventListener('scroll', func)
		return () => window.removeEventListener('scroll', func)
	}, [])

	function onScroll() {
		setScrollY(window.scrollY)
	}

	return (
		<div
			className={cn(
				'fixed z-20 w-full duration-300 h-80 md:h-100 px-20 md:px-50 lg:px-100 flex items-center',
				!atTop &&
					'bg-primary !h-[70px] text-white py-20 shadow-lg shadow-black/10',
				!darkNav && atTop && 'text-white bg-primary/0 border-none',
			)}
		>
			<Link
				href='/'
				className={`${!darkNav && atTop && 'block flex-1'} ${
					!darkNav &&
					atTop &&
					'[text-shadow:_0_5px_15px_rgb(0_0_0_/_20%)]'
				} md:w-[300px] md:flex-1 duration-300 tracking-tighter flex-1 leading-[30px] text-[26px]`}
			>
				<div className='flex items-center'>
					<div>
						<img
							alt='logo'
							src='/assets/logo.png'
							className={`${
								!darkNav ? 'brightness-0 invert' : ''
							} ${
								atTop ? 'md:scale-125' : ' brightness-0 invert'
							} block duration-300 w-70 `}
						/>
						<img
							alt='logotext'
							src='/assets/logotext.png'
							className={`${
								!darkNav ? 'brightness-0 invert' : ''
							} ${
								!atTop ? 'opacity-0 transition-y-40' : ''
							} absolute duration-300 w-70 transition-y-0 mt-[14px]`}
						/>
					</div>
					<img
						alt='logotext'
						src='/assets/logotext.png'
						className={`${
							atTop ? 'opacity-0 ' : ''
						} hidden md:block duration-300 w-[130px] brightness-0 transition-y-0 ml-20 invert`}
					/>
				</div>
			</Link>
			<div className='flex gap-[16px] md:gap-40 text-[14px] md:text-[16px]'>
				{sections.map((section, index) => {
					if (isMobile() && index === 0) {
						return null
					}

					return (
						<div
							key={section.label}
							className={cn(
								`duration-150 border-b-[1px]  tracking-wider uppercase items-end flex ${
									!darkNav
										? 'hover:border-white border-white/0'
										: 'opacity-100 hover:border-black/50 border-black/0'
								}`,
								section.route === pathName &&
									'!border-white/100',
							)}
						>
							{section.route && (
								<Link href={section.route}>
									{section.label}
								</Link>
							)}
							{!section.route && (
								<Dropdown>{section.label}</Dropdown>
							)}
						</div>
					)
				})}
			</div>
		</div>
	)
}

function Dropdown({ children }: { children: ReactNode }) {
	const [show, setShow] = useState(false)
	return (
		<div
			className='cursor-pointer relative'
			onMouseOver={() => setShow(true)}
			onMouseOut={() => setShow(false)}
		>
			{children}
			{show && (
				<div className='capitalize absolute pt-20'>
					<div className='-ml-[60px] overflow-hidden bg-white text-primary w-200 rounded-xl shadow-xl shadow-black/10 animate-fadeUpSmall'>
						<Link
							href='/innoblinds'
							className='block px-20 py-[14px] hover:bg-black/5'
						>
							InnoBlinds
						</Link>
						<Link
							href='/innogrille'
							className='block px-20 py-[14px] hover:bg-black/5'
						>
							InnoGrille
						</Link>
					</div>
				</div>
			)}
		</div>
	)
}
