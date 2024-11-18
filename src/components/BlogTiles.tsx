export default function BlogTiles({
	blogs = [],
	limit = 3,
}: {
	blogs: any[]
	limit: number
}) {
	return (
		<div className='w-full grid grid-cols-3 gap-50'>
			{blogs.slice(0, limit || 10000).map((blog) => (
				<div className='flex flex-col'>
					<div className='flex-1'>
						<div
							style={{ backgroundImage: `url(${blog.imageUrl})` }}
							className='aspect-video bg-center bg-cover rounded-lg mb-20'
						></div>
						<h3 className='mb-[14px] font-extralight leading-tight'>
							{blog.title}
						</h3>
					</div>
					<div className='font-bold uppercase'>Read more</div>
					{/* <div>{blog.text}</div> */}
				</div>
			))}
		</div>
	)
}
