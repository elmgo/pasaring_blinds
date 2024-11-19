export default function HomeSection1() {
	return (
		<div className='content flex flex-col gap-10 items-center'>
			<h2 className='text-primary'>Seamless Solutions For Every Home</h2>
			<div className='max-w-500 text-center text-primary text-[20px]'>
				Intergrated technology with elegance; make youur home smarter,
				safer & stylish
			</div>

			<div className='flex w-full mt-100 gap-100'>
				<div className='w-1/2'>
					<div
						className='aspect-video rounded-xl p-20 bg-center bg-cover'
						style={{ backgroundImage: `url("/assets/hero.jpg")` }}
					></div>
					<h3 className='my-20 text-[40px]'>InnoBlinds</h3>
					<div className='flex flex-col'>
						<div className='flex-1 text-[20px] mb-20'>
							Our automatic blinds system integrates seamlessly
							with modern living spaces, blending technology and
							convenience.
						</div>
						<div className='font-bold uppercase'>
							Discover the Benefits
						</div>
					</div>
				</div>
				<div className='w-1/2'>
					<div
						className='aspect-video rounded-xl p-20 bg-center bg-cover'
						style={{ backgroundImage: `url("/assets/hero.jpg")` }}
					></div>
					<h3 className='my-20 text-[40px]'>InnoGrille</h3>
					<div className='text-[20px] mb-20'>
						When it comes to your home's safety, InnoGrille offers
						an unmatched solution. Our invisible grille system is
						designed to provide a nearly invisible yet incredibly
						strong protective barrier.
					</div>
					<div className='font-bold uppercase'>
						Discover the Benefits
					</div>
				</div>
			</div>
		</div>
	)
}
