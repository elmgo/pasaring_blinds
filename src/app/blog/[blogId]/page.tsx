import { blogs } from '@/blogs/blogs'
import React from 'react'

export default function BlogPageBlog({ params }: any) {
	// @ts-ignore
	const blog = blogs[params.blogId!]
	return (
		<div className='flex flex-col items-center'>
			<div className='w-full max-w-[1000px]'>
				<h1 className='mb-50 w-full max-w-[1000px] leading-[60px]'>
					{blog.title}
				</h1>
				<div
					style={{ backgroundImage: `url(${blog.imageUrl})` }}
					className='rounded-lg mb-50 w-full h-[500px] bg-center bg-cover'
				/>
				<div
					className='text-[18px]'
					dangerouslySetInnerHTML={{
						__html: blog.content.replace(/\n/g, '<br />'),
					}}
				></div>
			</div>
		</div>
	)
}

export async function generateStaticParams() {
	// Return an array of possible `params` for the dynamic route
	return [
		{ blogId: '1' },
		{ blogId: '2' },
		{ blogId: '3' },
		{ blogId: '4' },
		{ blogId: '5' },
		{ blogId: '6' },
		{ blogId: '7' },
		{ blogId: '8' },
		{ blogId: '9' },
		{ blogId: '10' },
		{ blogId: '11' },
		{ blogId: '12' },
		{ blogId: '13' },
		{ blogId: '14' },
		{ blogId: '15' },
		{ blogId: '16' },
		{ blogId: '17' },
		{ blogId: '18' },
		{ blogId: '19' },
		{ blogId: '20' },
	]
}
