'use client'
import Hero from '@/components/Hero'
import ImageText from '@/components/ImageText'
import Link from 'next/link'
import React from 'react'

export default function PageInnoStruct() {
	return (
		<div className='w-full'>
			<Hero
				imageUrl='/images/innoblinds/hero.jpg'
				text='InnoBlinds: Smart Control, Seamless Style'
				ctaTitle='Schedule a free consultation'
				ctaUrl='/contact'
			/>
			<div className='flex flex-col items-center'>
				<div className='relative w-full'>
					<img
						src='/assets/logohalf.png'
						className='-scale-100 absolute opacity-5 bottom-0 md:bottom-auto md:top-0 right-0 md:h-full'
					/>
					<div className='content flex flex-col items-center !pb-0'>
						<h2 className='relative z-10 max-w-[900px] text-[24px] md:text-[30px] leading-tight'>
							The ultimate Automatic Blind System designed to
							transform your space. Whether you want to control
							light, protect your privacy, or enhance the
							aesthetic appeal of your home, InnoBlinds offers a
							premium solution that combines advanced technology
							with seamless style
							<div className='divider mt-80 ' />
						</h2>
					</div>
				</div>
				<ImageText
					imageUrl='/images/innoblinds/1.jpg'
					title='Customisable to Any Space'
					text='Every home is unique, and so are InnoBlinds. Our blinds are custom-made to fit any window size, ensuring a perfect fit that complements your home’s aesthetic.'
					ctaTitle='Schedule a consultation'
				/>
				<ImageText
					className='bg-black/5'
					imageUrl='/images/innoblinds/2.jpg'
					title='Smart Home Integration'
					text='InnoBlinds seamlessly integrate with your existing smart home systems, allowing you to automate and control them through voice commands or smartphone apps. Convenience has never looked this good.'
					ctaTitle='Schedule a consultation'
					imageToRight
				/>
				<ImageText
					imageUrl='/images/innoblinds/3.jpg'
					title='Powerful Motor & Robust Design'
					text='With a high-powered motor and durable build, InnoBlinds
					deliver a seamless user experience. Effortlessly control
					your blinds with just a touch, giving you precise control
					over the light and privacy in your home'
					ctaTitle='Schedule a consultation'
				/>
				<div className='relative bg-black/5 w-full'>
					<img
						src='/assets/logohalf.png'
						className='absolute bottom-0 md:bottom-auto md:top-0 left-0 md:h-full opacity-5'
					/>
					<div className='content !py-100 flex gap-30 text-center flex-col  relative'>
						<h2 className='text-primary'>Why InnoBlinds?</h2>
						<div className='max-w-600 mx-auto para'>
							InnoBlinds go beyond traditional blinds, offering a
							seamless blend of functionality, design, and
							technology. Whether you’re a tech-savvy professional
							or a design-focused homeowner, InnoBlinds add value,
							comfort, and sophistication to your living space.
							<Link href={'/contact'} className='block mt-50'>
								<button className='button-reverse'>
									Schedule a consultation
									<i className='ml-10 uil uil-angle-right-b' />
								</button>
								{/* <div className='text-[16px] mt-20'>
									Experience the difference with InnoGrille’s
									exclusive technology. Book a free
									consultation today to find the perfect
									solution for your home.
								</div> */}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
