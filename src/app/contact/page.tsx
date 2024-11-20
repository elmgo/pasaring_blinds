'use client'
import React, { useState } from 'react'

export default function ContactPage() {
	const [sent, setSent] = useState(false)

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
		<div
			className='content !py-[160px] md:!py-200 flex pt-[140px] pb-80 min-h-screen flex-1 flex-col items-center
		justify-center'
		>
			{sent ? (
				<h3 className='max-w-[400px] text-center text-[30px]'>
					Thanks for getting in touch. We&apos;ll reach out to you as
					soon as we can.
				</h3>
			) : (
				<div className='animate-fadeUp max-w-[600px] w-full'>
					<div className='flex flex-col'>
						<h1 className='text-center text-[46px] p-0 mb-20'>
							Get a free consultation today
						</h1>
						<div className='text-center text-black/50 mb-80 max-w-[600px]'>
							Experience the difference with InnoGrille&apos;s
							exclusive technology. Book a free consultation today
							to find the perfect solution for your home.
						</div>
					</div>

					<form
						onSubmit={handleSubmit}
						className='flex gap-10 flex-col'
					>
						<div className='flex gap-10'>
							<input
								required
								data-field='firstName'
								type='text'
								placeholder='First name'
							></input>
							<input
								required
								data-field='lastName'
								type='text'
								placeholder='Last name'
							></input>
						</div>
						<div className='relative'>
							<div className='absolute left-[12px] top-[23px] -translate-y-1/2'>
								+65
							</div>
							<input
								className='!pl-[50px]'
								required
								data-field='phone'
								type='number'
								placeholder='Phone number'
							></input>
						</div>
						{/* <input
							required
							data-field='email'
							type='email'
							placeholder='Email'
						></input> */}
						{/* <input
						data-field='address1'
						type='text'
						placeholder='Address line 1 (optional)'
					></input> */}
						<select required data-field='productType'>
							<option value='innoblinds'>InnoBlinds</option>
							<option value='innogrille'>InnoGrille</option>
						</select>
						<textarea
							data-field='address'
							placeholder='Your address...'
						></textarea>
						<button className='button-reverse mb-100 mt-20'>
							Submit
						</button>
					</form>
				</div>
			)}
		</div>
	)
}
