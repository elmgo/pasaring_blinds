import { blogs } from '@/blogs/blogs'
import Link from 'next/link'

export default function BlogTiles({ limit }: { limit?: number }) {
	return (
		<div className='animate-fadeUp w-full grid grid-cols-3 gap-30'>
			{Object.entries(blogs)
				.slice(0, limit || 100)
				.map(([key, val]) => {
					// @ts-ignore
					const blog = blogs[key]
					return (
						<Link
							key={blog.title}
							href={`/blog/${key}`}
							className='flex flex-col'
						>
							<div className=' flex-1'>
								<div
									style={{
										backgroundImage: `url(${blog.imageUrl})`,
									}}
									className='hover:scale-105 hover:shadow-xl duration-300 aspect-video bg-center bg-cover rounded-lg mb-20'
								></div>
								<h3 className='mb-[24px] font-extralight leading-tight'>
									{blog.title}
								</h3>
							</div>
							<div className='font-bold uppercase'>Read more</div>
							{/* <div>{blog.text}</div> */}
						</Link>
					)
				})}
		</div>
	)
}
