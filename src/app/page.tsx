'use client'
import Hero from '@/components/Hero'
import HomeSection1 from '@/components/home/HomeSection1'
import HomeSection2 from '@/components/home/HomeSection2'
import HomeSection3 from '@/components/home/HomeSection3'
import HomeSection4 from '@/components/home/HomeSection4'
import HomeSection5 from '@/components/home/HomeSection5'
import HomeSection6 from '@/components/home/HomeSection6'
import React from 'react'

export default function Page() {
	return (
		<div className='w-full'>
			<Hero
				text='Transforming homes with advanced Smart Blinds and
						Invisible Grills'
				ctaTitle='Schedule a free consultation'
				ctaUrl='/contact'
			/>
			<HomeSection1 />
			<HomeSection2 />
			<HomeSection3 />
			<HomeSection4 />
			<HomeSection5 />
			<HomeSection6 />
		</div>
	)
}
