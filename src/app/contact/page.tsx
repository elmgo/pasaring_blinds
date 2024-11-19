'use client'
import React from 'react'

export default function ContactPage() {
	function handleSubmit(e: any) {
		e.preventDefault()
		const obj: any = {}

		for (const field of e.target) {
			if (field.getAttribute('data-field')) {
				obj[field.getAttribute('data-field')] = field.value
			}
		}
	}

	return (
		<div
			className='content !py-[160px] md:!py-200 flex pt-[140px] pb-80 min-h-screen flex-1 flex-col items-center
		justify-center'
		>
			<div className='animate-fadeUp max-w-[600px] w-full'>
				<div className='flex flex-col'>
					<h1 className='text-[46px] p-0 mb-20'>
						Get a free consultation today
					</h1>
					<div className='text-black/50 mb-80 max-w-[600px]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Duis eleifend vitae massa non dignissim. Fusce velit
						arcu, luctus vitae ex hendrerit.
					</div>
				</div>

				<form onSubmit={handleSubmit} className='flex gap-10 flex-col'>
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
					<input
						required
						data-field='email'
						type='email'
						placeholder='Email'
					></input>
					{/* <input
						data-field='address1'
						type='text'
						placeholder='Address line 1 (optional)'
					></input> */}
					<textarea placeholder='Write your message here...'></textarea>
					{/* <select required data-field='appointmentType'>
						<option disabled selected>
							Appointment type
						</option>
						<option value='onsite'>Onsite appointment</option>
						<option value='kitchen'>Visit our Showroom</option>
					</select> */}
					<button className='button-reverse mb-100 mt-20'>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}
