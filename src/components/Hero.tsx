import Link from 'next/link'
import Parallax from './Parallax'

export default function Hero({ text, subText, ctaTitle, ctaUrl }: any) {
	return (
		<Parallax offset={200} bgUrl='/assets/hero3.jpg'>
			<div className='content bg-fixed relative flex items-end w-scren h-screen bg-center bg-cover'>
				<div className='absolute bg-black/20 top-0 left-0 w-full h-full'></div>
				<div className='relative z-10'>
					<h1 className='max-w-[500px] xl:max-w-[800px] text-white font-light'>
						{text}
					</h1>
					{subText && (
						<div className='font-light mt-20'>{subText}</div>
					)}
					<Link
						href={ctaUrl}
						className='w-full text-center md:w-auto inline-block mt-40 button'
					>
						{ctaTitle}
						<i className='ml-10 uil uil-angle-right-b' />
					</Link>
				</div>
			</div>
		</Parallax>
	)
}
