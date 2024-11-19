import React, { ReactNode, useRef, useState, useEffect } from 'react'

const Draggable = ({ children }: { children: ReactNode }) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [isDragging, setIsDragging] = useState(false)
	const [startX, setStartX] = useState(0)
	const [scrollLeft, setScrollLeft] = useState(0)

	const handleMouseDown = (e: React.MouseEvent) => {
		if (containerRef.current) {
			setIsDragging(true)
			setStartX(e.pageX - containerRef.current.offsetLeft)
			setScrollLeft(containerRef.current.scrollLeft)
			containerRef.current.style.cursor = 'grabbing'
		}
	}

	const handleMouseLeave = () => {
		setIsDragging(false)
		if (containerRef.current) {
			containerRef.current.style.cursor = 'grab'
		}
	}

	const handleMouseUp = () => {
		setIsDragging(false)
		if (containerRef.current) {
			containerRef.current.style.cursor = 'grab'
		}
	}

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || !containerRef.current) return
		e.preventDefault()
		const x = e.pageX - containerRef.current.offsetLeft
		const walk = (x - startX) * 1.5
		containerRef.current.scrollLeft = scrollLeft - walk
	}

	// Set initial cursor style
	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.style.cursor = 'grab'
		}
	}, [])

	return (
		<div
			ref={containerRef}
			className='noscroll draggable-container overflow-x-auto whitespace-nowrap'
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			onMouseUp={handleMouseUp}
		>
			{children}
		</div>
	)
}

export default Draggable
