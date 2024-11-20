export default function HomeSection4() {
	return (
		<div className='relative bg-black/5'>
			<img
				src='/assets/logohalf.png'
				className='absolute bottom-0 md:bottom-auto md:top-0 left-0 md:h-full opacity-5'
			/>
			<div className='content  flex gap-50 flex-col  relative'>
				<h2 className='text-left text-primary'>What They Say</h2>
				<div className='md:flex gap-50 w-full'>
					<div className='card md:w-1/3 mb-40 md:mb-0 flex flex-col'>
						<div className='flex-1'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur sed quam sed nisl blandit cursus in
							porta tellus. quis, rutrum nec ipsum.
						</div>
						<div className='font-semibold text-[16px] mt-20'>
							- Peter Ng
						</div>
					</div>
					<div className='card md:w-1/3 flex flex-col mb-40 md:mb-0'>
						<div className='flex-1'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur sed quam sed nisl blandit cursus in
							porta tellus. Nullam sapien nunc, gravida sit amet
							maximus quis, aliquam a quis, rutrum nec ipsum.
						</div>
						<div className='font-semibold text-[16px] mt-20'>
							- Peter Ng
						</div>
					</div>
					<div className='flex flex-col card md:w-1/3 mb-40 md:mb-0'>
						<div className='flex-1'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur sed quam sed nisl blandit cursus in
							porta tellus. quis, rutrum nec ipsum.
						</div>
						<div className='font-semibold text-[16px] mt-20'>
							- Peter Ng
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
