export default function Hero() {
	return (
		<div
			style={{ backgroundImage: `url("/assets/hero.jpg")` }}
			className='bg-fixed relative flex items-end p-100 pb-[150px] w-scren h-screen bg-center bg-cover'
		>
			<div className='absolute bg-black/20 top-0 left-0 w-full h-full'></div>
			<div className='relative z-10'>
				<div className='w-[500px] text-[30px] text-white font-light'>
					Transforming homes with advanced Smart Blinds and Invisible
					Grills
				</div>
				<button className='mt-20 button'>
					Schedule a free consultation
				</button>
			</div>
		</div>
	)
}
