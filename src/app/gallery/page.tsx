import React from 'react'

export default function GalleryPage() {
	return (
		<div
			className='animate-fadeUp flex pt-[140px] pb-80 min-h-screen flex-1 flex-col items-center
		justify-center px-[50px] py-[150px]'
		>
			<h2 className='text-[46px] font-secondary p-0 m-0'>Gallery</h2>
			<div className='font-secondary text-black/50 mb-80 max-w-[600px] text-center'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
				eleifend vitae massa non dignissim. Fusce velit arcu, luctus
				vitae ex hendrerit.
			</div>

			<div className='grid grid-cols-3 w-full gap-40 '>
				{[...new Array(6)].map((_item, index) => (
					<div
						key={_item}
						className={`aspect-square overflow-hidden rounded-lg`}
					>
						<div
							style={{
								backgroundImage: `url("/images/image_${
									index + 1
								}.jpg")`,
							}}
							className='hover:scale-110 hover:brightness-125 cursor-pointer
							duration-300 w-full h-full bg-gray-200 bg-cover bg-center'
						></div>
					</div>
				))}
			</div>
		</div>
	)
}
