import Link from 'next/link'
import Parallax from './Parallax'

export default function Hero() {
	return (
		<Parallax bgUrl='/assets/hero3.jpg'>
			<div className='bg-fixed relative flex items-end p-100 w-scren h-screen bg-center bg-cover'>
				<div className='absolute bg-black/20 top-0 left-0 w-full h-full'></div>
				<div className='relative z-10'>
					<h1 className='w-[500px] text-[40px] text-white font-light'>
						Transforming homes with advanced Smart Blinds and
						Invisible Grills
					</h1>
					<Link href='/contact' className='inline-block mt-40 button'>
						Schedule a free consultation
					</Link>
				</div>
			</div>
		</Parallax>
	)
}
