'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Parallax from './Parallax'

export default function ImageText({
	imageUrl,
	title,
	text,
	eyebrow,
	ctaTitle,
	className,
	ctaLink = '/contact',
	imageToRight = false,
}: any) {
	const [windowSize, setWindowSize] = useState<number>(0)
	const isMobile = windowSize < 1024

	useEffect(() => {
		window.addEventListener('resize', onresize)
		onresize()
		return () => window.removeEventListener('resize', onresize)
	}, [])

	function onresize() {
		setWindowSize(window.innerWidth)
	}

	function renderImage() {
		return (
			<div className='lg:w-1/2 h-[300px] md:h-auto overflow-hidden !rounded-xl'>
				<Parallax
					offset={1900}
					bgSize={'170%'}
					speed={0.1}
					className='w-full !h-400 overflow-hidden'
					bgUrl={imageUrl}
				/>
			</div>
		)
	}

	return (
		<div
			style={
				imageToRight
					? {
							background: `linear-gradient(90deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 100%)`,
					  }
					: {}
			}
			className={`${className} content flex items-center lg:gap-100`}
		>
			{!imageToRight && !isMobile && renderImage()}
			<div className='lg:w-1/2'>
				{eyebrow && <div className='eyebrow'>{eyebrow}</div>}
				<h3 className='text-left mb-30 lg:mb-0'>{title}</h3>
				{windowSize < 1024 && renderImage()}
				<div className='para mt-20 mb-40'>{text}</div>
				<Link href={ctaLink}>
					<button className='button-reverse'>
						{ctaTitle}
						<i className='ml-10 uil uil-angle-right-b' />
					</button>
				</Link>
			</div>
			{imageToRight && !isMobile && renderImage()}
		</div>
	)
}
