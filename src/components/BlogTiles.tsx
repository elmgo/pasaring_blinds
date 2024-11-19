import { blogs } from '@/blogs/blogs'
import Link from 'next/link'

export default function BlogTiles({ limit }: { limit?: number }) {
	return (
		<div className='animate-fadeUp w-full md:grid grid-cols-3 gap-30'>
			{Object.entries(blogs)
				.slice(0, limit || 100)
				.map(([key, val]) => {
					// @ts-ignore
					const blog = blogs[key]
					return (
						<Link
							key={blog.title}
							href={`/blog/${key}`}
							className='flex flex-col mb-40 md:mb-0'
						>
							<div className=' flex-1'>
								<div
									style={{
										backgroundImage: `url(${blog.imageUrl})`,
									}}
									className='hover:scale-105 hover:-translate-y-10 hover:shadow-xl !shadow-black/20 duration-300 aspect-video bg-center bg-cover rounded-lg mb-20'
								></div>
								<div className='mb-[24px] text-[20px] font-extralight leading-tight'>
									{blog.title}
								</div>
							</div>
							<div className='font-bold uppercase'>
								Read more
								<i className='ml-10 uil uil-angle-right-b' />
							</div>
							{/* <div>{blog.text}</div> */}
						</Link>
					)
				})}
		</div>
	)
}
