'use client'
import BlogTiles from '@/components/BlogTiles'
import Parallax from '@/components/Parallax'
import React from 'react'

export default function BlogPage() {
	return (
		<div>
			<Parallax
				offset={500}
				bgSize={'150%'}
				className='!h-[300px] md:h-[500px] items-end flex'
				bgUrl='/assets/hero_blog.jpg'
			>
				<h1
					className='hidden md:block content !pb-70 '
					style={{ textShadow: '0 0 20px rgba(0,0,0,0.3)' }}
				>
					Blog
				</h1>
			</Parallax>
			<div className='content'>
				<h1 className='md:hidden mb-50'>Blog</h1>
				<BlogTiles />
			</div>
		</div>
	)
}
