'use client'
import React, { useState } from 'react'
import cn from 'classnames'
import InfoModal from './InfoModal'

const slides = [
	{
		item: 'what',
		title: 'What Do We Do?',
		body: `We offer a wide range of wrapping solutions for homes, offices, and other surfaces, delivering affordable, durable alternatives to traditional renovations. From kitchens to wardrobes and beyond, our quick installation process ensures minimal disruption to your daily routine, while achieving stunning results. Whether it's a modern refresh or a bold new look, we’ve got you covered.`,
	},
	{
		item: 'why',
		title: 'Why Lamiwrap™?',
		body: `Lamiwrap™ offers unmatched versatility and quality. Designed to withstand wear and tear, it’s resistant to scratches, water, and extreme temperatures, making it the perfect solution for long-lasting beauty in any space. With hundreds of finishes to choose from, Lamiwrap™ allows you to express your vision without compromising on durability or style.
		<br/><br/>Ready to bring your vision to life? Contact us today!
`,
	},
	{
		item: 'who',
		title: 'Who is Envision Wraps	?',
		body: `Envision Wraps started in Singapore with a mission to transform spaces through innovative wrapping. Specialising in high-quality wraps for furniture, walls and other surfaces, we offer a stylish and durable alternative to traditional laminates.
		<br/><br/>Our commitment to exceptional service and unparalleled craftsmanship has quickly made us a trusted name in the industry.
			<br/><br/>Work with Envision Wrap today <a href="">(Link)</a>`,
	},
]

export default function Slideshow() {
	const [currentSlide, setCurrentSlide] = useState(0)

	function goNext() {
		setCurrentSlide((prev) => {
			if (prev === slides.length - 1) return 0
			return prev + 1
		})
	}

	function goPrev() {
		setCurrentSlide((prev) => {
			if (prev === 0) return slides.length - 1
			return prev - 1
		})
	}

	return (
		<div className='overflow-hidden bg-black absolute top-0 left-0 w-screen h-screen'>
			{slides.map((_slide, index) => (
				<div
					key={`slide-${index}`}
					style={{
						backgroundImage: `url("/images/image_${
							index + 1
						}.jpg")`,
						zIndex: index,
					}}
					className={cn(
						`absolute duration-700 w-[140%] h-screen bg-cover bg-center left-0 top-0 opacity-0`,
						index === currentSlide - 1 && 'left-[-40%] opacity-0',
						index === currentSlide && 'left-[-20%] opacity-100',
						currentSlide > 1 &&
							index === 0 &&
							'left-[20%] opacity-0',
					)}
				></div>
			))}
			<div
				style={{
					background:
						'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 30%)',
				}}
				className='flex justify-center flex-col z-10 h-screen w-[75%] bg-black/80 absolute right-0 top-0'
			>
				<div className='animate-fadeUpDelay relative pl-[450px] xl:pl-[450px] xxl:pl-[550px] pr-[200px] pt-[30vh] w-full h-full'>
					<div className='flex gap-32 text-white'>
						{slides.map((slide, index) => (
							<div
								key={slide.item}
								onClick={() => setCurrentSlide(index)}
								className={cn(
									'select-none font-secondary text-white/30 cursor-pointer underline-offset-4 px-0 py-5 uppercase text-[18px] rounded-md mb-32 duration-700',
									index === currentSlide &&
										'underline !text-white',
								)}
							>
								{slide.item}
							</div>
						))}
					</div>
					<div className='relative'>
						{slides.map((slide, index) => (
							<div
								key={slide.title}
								className={cn(
									`absolute text-white duration-500`,
									index === currentSlide
										? 'translate-y-[0px] opacity-100 delay-300'
										: 'translate-y-[7px] opacity-0',
								)}
							>
								<div className='leading-[48px] font-extralight uppercase text-[45px] mb-20 font-secondary'>
									{slide.title}
								</div>
								<div
									className='text-[16px] text-white/50'
									dangerouslySetInnerHTML={{
										__html: slide.body,
									}}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<span className='text-[60px] cursor-pointer'>
				<i
					onClick={goPrev}
					className='text-white/50 active:text-white/50 hover:-translate-x-[5px] hover:text-white duration-300 z-10 absolute left-32 top-1/2 uil uil-angle-left-b'
				/>
				<i
					onClick={goNext}
					className='text-white/50 active:text-white/50 hover:translate-x-[5px] hover:text-white duration-300 z-10 absolute right-32 top-1/2 uil uil-angle-right-b'
				/>
			</span>
		</div>
	)
}
