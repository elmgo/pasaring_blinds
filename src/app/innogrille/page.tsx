import Hero from '@/components/Hero'
import ImageText from '@/components/ImageText'
import Link from 'next/link'
import React from 'react'

export default function PageInnoStruct() {
	return (
		<div className='w-full'>
			<Hero
				offset={500}
				imageUrl='/images/innogrille/hero.jpg'
				text='InnoGrille: Invisible Protection, Visible Style'
				ctaTitle='Schedule a free consultation'
				ctaUrl='/contact'
			/>
			<div className='flex flex-col items-center'>
				<div className='relative w-full'>
					<img
						src='/assets/logohalf.png'
						alt=''
						className='-scale-100 absolute opacity-5 bottom-0 md:bottom-auto md:top-0 right-0 md:h-full'
					/>
					<div className='content flex flex-col items-center !pb-0'>
						<h2 className='relative z-10 max-w-[900px] text-[24px] md:text-[30px] leading-tight'>
							InnoGrille redefines window and balcony protection
							with a revolutionary invisible grill system that
							combines minimalism with maximum security. As the
							only system in the market equipped with the InnoClip
							System, we ensure your home stays secure even when
							the unexpected happens.
							<div className='divider mt-80 ' />
						</h2>
					</div>
				</div>
				<ImageText
					eyebrow='Innovation Meets Peace of Mind'
					imageUrl='/images/innogrille/1.jpg'
					title='Exclusive InnoClip Safety System'
					text='InnoGrille is the only invisible grill solution that uses the innovative InnoClip System, designed to maintain full tension in all grill wires even if one snaps. Unlike standard invisible grills where one broken wire compromises the entire system, our InnoClip System keeps the other wires tight, ensuring continued protection and a neat appearance. This feature provides 100% security and peace of mind.'
					ctaTitle='Experience the InnoClip Advantage'
				/>
				<ImageText
					eyebrow='Unobstructed Views, Uncompromising Protection'
					className='bg-black/5'
					imageUrl='/images/innogrille/2.jpg'
					title='Minimalist Design, Maximum Strength'
					text='Enjoy unobstructed views and modern aesthetics with InnoGrille’s slim, nearly invisible design. Built from high-grade materials, it offers robust protection without sacrificing style.'
					ctaTitle='Discover the Balance of Design and Safety'
					imageToRight
				/>
				<ImageText
					eyebrow='Tailored Safety for Your Home'
					imageUrl='/images/innogrille/3.jpg'
					title='Custom-Fit for Every Space'
					text='InnoGrille is custom-made to suit any window or balcony, ensuring a seamless fit that enhances the safety and beauty of your home.'
					ctaTitle='Find the Perfect Fit Today'
				/>
				<div className='relative bg-black/5 w-full'>
					<img
						src='/assets/logohalf.png'
						alt=''
						className='absolute bottom-0 md:bottom-auto md:top-0 left-0 md:h-full opacity-5'
					/>
					<div className='content !py-100 flex gap-30 text-center flex-col  relative'>
						<h2 className='text-primary'>Why InnoBlinds?</h2>
						<div className='max-w-600 mx-auto para'>
							InnoGrille is not just another invisible grill
							system; it&apos;s a leap forward in safety and
							innovation. With our InnoClip System, you can trust
							that your home remains secure, even under pressure.
							Our commitment to safety and elegance ensures that
							you get a product that not only protects but also
							complements the look of your home.
							<Link href={'/contact'} className='block mt-50'>
								<button className='button-reverse'>
									Secure Your Home with InnGrille
									<i className='ml-10 uil uil-angle-right-b' />
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
