'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import cn from 'classnames'

const sections = [
	{
		label: 'Home',
		route: '/',
	},
	{
		label: 'Products',
		route: '/products',
	},
	{
		label: 'Gallery',
		route: '/gallery',
	},
	{
		label: 'Contact',
		route: '/contact',
	},
]

export default function Footer() {
	return (
		<div
			className={cn(
				'text-black/50 text-[12px] flex bg-gray-100 border-t-[1px] z-20 w-full duration-300 py-[40px] px-50 gap-[10%]',
			)}
		>
			<div>
				<Link
					href='/'
					className='tracking-tighter flex-1 leading-[30px] text-[30px] font-bold text-black/50
                    mb-20 inline-block'
				>
					Bodaq
				</Link>
				<div className='w-[400px] '>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras mauris turpis, mollis nec lectus sed, faucibus vehicula
					nisi. Nunc accumsan sagittis lectus. Donec lacus mi, iaculis
					sit amet dapibus ut, congue nec massa
					<div className='font-bold mt-10'>© 2024</div>
				</div>
			</div>
			<div className='text-right flex-1'>
				158 Kallang Way #01-03 S349245
				<br />
				Singapore
				<br />
				<br />
				<a
					href='mailto:some.name@emailaddress.com'
					className='underline'
				>
					some.name@emailaddress.com
				</a>
				<div className='justify-end mt-20 flex gap-10 text-[20px]'>
					<i className='uil uil-linkedin' />
					<i className='uil uil-instagram-alt' />
					<i className='uil uil-twitter' />
					<i className='uil uil-whatsapp' />
				</div>
			</div>
		</div>
	)
}
