'use client'
import React, { ReactNode } from 'react'

export default function BlogLayout({ children }: { children: ReactNode }) {
	return <div className='content !pt-[200px] w-full '>{children}</div>
}