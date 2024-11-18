export default function HomeSection1() {
	return (
		<div className='content flex flex-col gap-10 items-center'>
			<h2 className='text-primary'>Seamless Solutions For Every Home</h2>
			<div className='w-300 text-center text-primary'>
				Intergrated technology with elegance; make youur home smarter,
				safer & stylish
			</div>

			<div className='flex w-full mt-100 gap-100'>
				<div
					className='w-1/2 aspect-video rounded-xl p-20 bg-center bg-cover'
					style={{ backgroundImage: `url("/assets/hero.jpg")` }}
				></div>
				<div
					className='w-1/2 aspect-video rounded-xl p-20 bg-center bg-cover'
					style={{ backgroundImage: `url("/assets/hero.jpg")` }}
				></div>
			</div>
		</div>
	)
}
