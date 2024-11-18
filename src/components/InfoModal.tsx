'use client'
import React, { useEffect, useState } from 'react'
import cn from 'classnames'

export default function InfoModal({
	items,
	index,
	onClose,
}: {
	items: any[]
	index: number | undefined
	onClose: () => void
}) {
	const [currentIndex, setCurrentIndex] = useState(index || 0)
	const item = items[currentIndex]

	function goPrev() {
		setCurrentIndex((prev) => {
			if (prev === 0) {
				return items.length - 1
			}
			return prev - 1
		})
	}

	function goNext() {
		setCurrentIndex((prev) => {
			if (prev === items.length - 1) {
				return 0
			}
			return prev + 1
		})
	}

	return (
		<div className='animate-fadeUp flex pt-[95px] items-center justify-center bg-black/10 w-screen h-screen fixed top-0 left-0'>
			<div className='gap-50 relative w-[60%] p-[50px] h-[80%] flex bg-white shadow-2xl rounded-xl'>
				<i
					onClick={onClose}
					className='cursor-pointer absolute text-[24px] top-50 right-50 uil uil-multiply'
				/>
				<div className='w-[40%] bg-black/10 rounded-sm'></div>
				<div className='flex flex-col flex-1'>
					<div className='flex-1 flex flex-col '>
						<div className='text-[40px] mb-40'>{item.code}</div>
						<div className='flex'>
							<div className='w-[100px] font-bold'>Pattern</div>
							<div className=''>{item.pattern}</div>
						</div>
						<div className='flex'>
							<div className='w-[100px] font-bold'>Coating</div>
							<div className=''>{item.coating}</div>
						</div>
						<div className='flex'>
							<div className='w-[100px] font-bold'>Material</div>
							<div className=''>{item.material}</div>
						</div>
					</div>
					<div className='flex select-none'>
						<div
							onClick={goPrev}
							className='cursor-pointer font-bold flex-1 flex items-center'
						>
							<i className='mr-10 text-[20px] uil uil-angle-left'></i>
							Previous
						</div>
						<div
							onClick={goNext}
							className='cursor-pointer font-bold text-right flex items-center'
						>
							Next
							<i className='ml-10 text-[20px] uil uil-angle-right'></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
