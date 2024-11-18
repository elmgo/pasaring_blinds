'use client'
import Hero from '@/components/Hero'
import HomeSection1 from '@/components/HomeSection1'
import HomeSection2 from '@/components/HomeSection2'
import HomeSection3 from '@/components/HomeSection3'
import HomeSection4 from '@/components/HomeSection4'
import HomeSection5 from '@/components/HomeSection5'
import HomeSection6 from '@/components/HomeSection6'
import React from 'react'

export default function Page() {
	return (
		<div className='w-full'>
			<Hero />
			<HomeSection1 />
			<HomeSection2 />
			<HomeSection3 />
			<HomeSection4 />
			<HomeSection5 />
			<HomeSection6 />
		</div>
	)
}
