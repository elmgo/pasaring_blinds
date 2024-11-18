'use client'
import InfoModal from '@/components/InfoModal'
import React, { useEffect, useState } from 'react'
import products from '../../products/products'

const categories = {
	bodaq: ['basic', 'natural surface', 'stone & marble', 'wood'],
	lg: [
		'big stone',
		'big wood',
		'classic wood',
		'concrete & mortar',
		'dual',
		'emboss',
		'leather',
		'marble',
		'metal',
		'misty',
		'premium wood',
		'solid',
		'stone',
		'stucco',
		'textile',
		'wood',
	],
	soif: [
		'fabric & leather',
		'metal',
		'solid',
		'stone & marble',
		'versa-tile',
		'wood',
	],
}

export default function ProductsPage() {
	const [selectedSection, setSelectedSection] = useState<number>()
	const [selectedCategory, setSelectedCategory] = useState<number>()
	const [selectedItem, setSelectedItem] = useState<number>()
	const [items, setItems] = useState<any>([])

	useEffect(() => {
		setItems(
			[...new Array(60)].map((i) => ({
				code: `WS-${Math.round(Math.random() * 1000)}`,
				pattern: 'Wood',
				coating: 'Matt',
				material: 'PVC',
			})),
		)
	}, [])

	return (
		<div className='px-[50px] py-[150px] flex min-h-screen flex-1 flex-col'>
			<div className='flex justify-end'>
				<div className='flex-1 flex gap-20'>
					<div className='h-[42px] inline-flex overflow-hidden gap-1 bg-black/10 rounded-lg border-[1px] border-black/10'>
						{Object.entries(categories).map(([key], index) => (
							<div
								key={key}
								onClick={() => setSelectedSection(index)}
								className={`${
									index === selectedSection
										? 'bg-gray-100 pointer-events-none'
										: 'bg-white hover:bg-gray-100 active:bg-gray-200'
								} w-[100px] h-full flex items-center justify-center 
								duration-300 cursor-pointer`}
							>
								{key.toUpperCase()}
							</div>
						))}
					</div>
					{/* <div className='h-[42px] inline-flex overflow-hidden gap-1 bg-black/10 rounded-lg border-[1px] border-black/10'>
						{Object.entries(categories).map((category, index) => (
							<div
								key={category}
								onClick={() => setSelectedCategory(index)}
								className={`${
									index === selectedCategory
										? 'bg-gray-100 pointer-events-none'
										: 'bg-white hover:bg-gray-100 active:bg-gray-200'
								} px-[24px] h-full flex items-center justify-center 
									 duration-300 cursor-pointer `}
							>
								{category}
							</div>
						))}
					</div> */}
				</div>

				<div className='items-center gap-10 ml-[30px] h-[42px] inline-flex px-14 bg-white rounded-lg border-[1px] border-black/20'>
					<input
						className='!outline-none'
						placeholder='Product name or code...'
					></input>
					<i className='uil uil-search'></i>
				</div>
			</div>

			<div className='mt-[60px] text-black/60 pb-10 border-b-[1px]'>
				Showing <b>{products.length}</b> results of{' '}
				<b>{products.length}</b> total.
			</div>

			<div className='mt-[30px] grid grid-cols-8 gap-20'>
				{products.map((item: any, index: any) => (
					<div
						key={`item-${index}`}
						className='cursor-pointer'
						onClick={() => setSelectedItem(index)}
					>
						<div
							style={{
								backgroundImage: `url(${`/images/products/${item.catalogue.toLowerCase()}/${encodeURIComponent(
									item.series.toLowerCase(),
								)}/${encodeURIComponent(item.code)
									.replace(/\(/g, '%28')
									.replace(/\)/g, '%29')}.jpg`})`,
							}}
							className='w-full aspect-square overflow-hidden bg-black/10 rounded-md hover:bg-black/20 duration-300'
						>
							<div
								style={{
									backgroundImage: `url(${`/images/products/${item.catalogue.toLowerCase()}/${encodeURIComponent(
										item.series.toLowerCase(),
									)}/${encodeURIComponent(item.code)
										.replace(/\(/g, '%28')
										.replace(/\)/g, '%29')}.png`})`,
								}}
								className='w-full h-full'
							></div>
						</div>
						<span className='font-bold text-[12px]'>
							{item.code}
						</span>
					</div>
				))}
			</div>

			{selectedItem !== undefined && (
				<InfoModal
					onClose={() => setSelectedItem(undefined)}
					items={items}
					index={selectedItem}
				/>
			)}
		</div>
	)
}
