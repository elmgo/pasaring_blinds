'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import cn from 'classnames'

export default function Footer() {
	const [sent, setSent] = useState<boolean>(false)

	async function handleSubmit(e: any) {
		e.preventDefault()
		const obj: any = {}

		for (const field of e.target) {
			if (field.getAttribute('data-field')) {
				obj[field.getAttribute('data-field')] = field.value
			}
		}

		obj.name = `${obj.firstName} ${obj.lastName}`
		delete obj.firstName
		delete obj.lastName

		await fetch('https://innostruct.sg.com/mail.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(obj),
		})

		setSent(true)
	}

	return (
		<>
			<div
				className={cn(
					'content items-center !py-50 text-black/50 text-[12px] md:flex bg-primary z-20 w-full duration-300 text-white gap-[10%]',
				)}
			>
				<div className='w-full md:w-1/3 lg:w-1/2'>
					<Link
						href='/'
						className='tracking-tighter flex-1 leading-[30px] text-[30px] font-bold text-white/50
					mb-20 inline-block'
					>
						<img
							alt='logo'
							src='/assets/logo.png'
							className='block w-80 brightness-0 invert'
						/>
						<img
							alt='logotext'
							src='/assets/logotext.png'
							className={`mt-5 duration-500 w-80 brightness-0 transition-y-0 invert`}
						/>
					</Link>
					<div className='w-full max-w-[400px] opacity-50 text-[18px]'>
						5, Ang Mo Kio
						<br />
						Inustrial Park 2A, #02-19, S(567760)
						<br />
						+65 9618 9383
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
							<form
								onSubmit={handleSubmit}
								className='flex gap-10 flex-col'
							>
								<div className='flex text-right flex-1 gap-20'>
									<div className='w-1/2'>
										<input
											type='text'
											placeholder='Name'
											className='mb-20 !border-white/30'
										/>
										<textarea
											data-field='address'
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
										<select
											data-field='productType'
											className='mb-20  !border-white/30 !text-gray'
										>
											<option className='text-primary'>
												InnoBlinds
											</option>
											<option className='text-primary'>
												InnoGrille
											</option>
										</select>
										<input
											data-field='phone'
											type='text'
											placeholder='Mobile bumber'
											className='mb-20 !border-white/30'
										/>
										<button className='button'>
											Submit
										</button>
										{/* <textarea placeholder='Message' className='h-100' /> */}
									</div>
								</div>
							</form>
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
							alt=''
							src='/assets/tiktok.svg'
							className='h-[25px]  hover:opacity-50 duration-200'
						/>
					</Link>
					<Link target='_blank' href='https://wa.me/+6596189383'>
						<i className='uil uil-whatsapp  hover:opacity-50 duration-200' />
					</Link>
				</div>
			</div>
		</>
	)
}
