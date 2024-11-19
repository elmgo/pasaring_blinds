'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import cn from 'classnames'

export default function Footer() {
	const [sent, setSent] = useState<boolean>(false)

	async function onSubmit() {
		// await fetch('')
		setSent(true)
	}

	return (
		<>
			<div
				className={cn(
					'content items-center text-black/50 text-[12px] md:flex bg-primary z-20 w-full duration-300 text-white gap-[10%]',
				)}
			>
				<div className='w-full md:w-1/3 lg:w-1/2'>
					<Link
						href='/'
						className='tracking-tighter flex-1 leading-[30px] text-[30px] font-bold text-white/50
					mb-20 inline-block'
					>
						<img
							src='/assets/logo.png'
							className='block w-80 brightness-0 invert'
						/>
						<img
							src='/assets/logotext.png'
							className={`mt-5 duration-500 w-80 brightness-0 transition-y-0 invert`}
						/>
					</Link>
					<div className='w-[400px] opacity-50 text-[18px]'>
						46 Jalan Pemimpin
						<br />
						Singapore 530543
						<br />
						+65 1234 5678
					</div>
				</div>
				<div>
					{sent ? (
						<h3 className='text-[30px]'>
							Thanks for getting in touch. We&apos;ll reach out to
							you as soon as we can.
						</h3>
					) : (
						<>
							<div className='mt-40 md:mt-0 text-lg mb-20 text-white/70'>
								Get a free consultation today
							</div>
							<div className='flex text-right flex-1 gap-20'>
								<div className='w-1/2'>
									<input
										type='text'
										placeholder='Name'
										className='mb-20 !border-white/30'
									/>
									<textarea
										placeholder='Address'
										className='h-100 !border-white/30'
									/>
								</div>
								<div className='w-1/2'>
									{/* <input
								type='text'
								placeholder='Email'
								className='mb-20 !border-white/30'
								/> */}
									<select className='mb-20  !border-white/30 !text-gray'>
										<option className='text-primary'>
											InnoBlinds
										</option>
										<option className='text-primary'>
											InnoGrille
										</option>
									</select>
									<input
										type='text'
										placeholder='Mobile bumber'
										className='mb-20 !border-white/30'
									/>
									<button
										className='button'
										onClick={onSubmit}
									>
										Submit
									</button>
									{/* <textarea placeholder='Message' className='h-100' /> */}
								</div>
							</div>
						</>
					)}
				</div>
			</div>
			<div className='text-white bg-primaryDark flex items-center content !py-20'>
				<div className='flex-1 opacity-50 text-[12px]'>
					©2024 InnoStruct
				</div>
				<div className='flex gap-10 text-[22px] -translate-y-0 items-center'>
					<Link
						target='_blank'
						href='https://www.instagram.com/innostruct.sg/'
					>
						<i className='uil uil-instagram-alt hover:opacity-50 duration-200' />
					</Link>
					<Link
						target='_blank'
						href='https://www.tiktok.com/@innostruct.sg?is_from_webapp=1&sender_device=pc'
					>
						<img
							src='/assets/tiktok.svg'
							className='h-[25px]  hover:opacity-50 duration-200'
						/>
					</Link>
					<Link target='_blank' href=''>
						<i className='uil uil-whatsapp  hover:opacity-50 duration-200' />
					</Link>
				</div>
			</div>
		</>
	)
}
