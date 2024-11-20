'use client'
import BlogTiles from '@/components/BlogTiles'
import Parallax from '@/components/Parallax'
import React from 'react'

export default function BlogPage() {
	return (
		<div>
			<Parallax
				className='!h-[400px] items-end flex'
				bgUrl='/assets/hero_blog.jpg'
			>
				<h1 className='content !pb-70'>Blog</h1>
			</Parallax>
			<div className='content'>
				<BlogTiles />
			</div>
		</div>
	)
}
