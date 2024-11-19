import React from 'react'
import blog1 from '../../../../blogs/blog1'
import blog2 from '../../../../blogs/blog2'
import blog3 from '../../../../blogs/blog3'
import blog4 from '../../../../blogs/blog4'
import blog5 from '../../../../blogs/blog5'
import blog6 from '../../../../blogs/blog6'
import blog7 from '../../../../blogs/blog7'
import blog8 from '../../../../blogs/blog8'
import blog9 from '../../../../blogs/blog9'
import blog10 from '../../../../blogs/blog10'
import blog11 from '../../../../blogs/blog11'
import blog12 from '../../../../blogs/blog12'
import blog13 from '../../../../blogs/blog13'
import blog14 from '../../../../blogs/blog14'
import blog15 from '../../../../blogs/blog15'
import blog16 from '../../../../blogs/blog16'
import blog17 from '../../../../blogs/blog17'
import blog18 from '../../../../blogs/blog18'
import blog19 from '../../../../blogs/blog19'
import blog20 from '../../../../blogs/blog20'

export const blogs = {
	1: blog1,
	2: blog2,
	3: blog3,
	4: blog4,
	5: blog5,
	6: blog6,
	7: blog7,
	8: blog8,
	9: blog9,
	10: blog10,
	11: blog11,
	12: blog12,
	13: blog13,
	14: blog14,
	15: blog15,
	16: blog16,
	17: blog17,
	18: blog18,
	19: blog19,
	20: blog20,
}

export default function BlogPage({ params }: any) {
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
