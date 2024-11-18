import React, { ReactNode, useRef } from 'react'

const Draggable = ({ children }: { children: ReactNode }) => {
	const containerRef = useRef<HTMLDivElement>(null)

	// Variables to store dragging state
	let isDragging = false
	let startX: number
	let scrollLeft: number

	const handleMouseDown = (e: React.MouseEvent) => {
		if (containerRef.current) {
			isDragging = true
			startX = e.pageX - containerRef.current.offsetLeft
			scrollLeft = containerRef.current.scrollLeft
			containerRef.current.style.cursor = 'grabbing'
		}
	}

	const handleMouseLeaveOrUp = () => {
		isDragging = false
		if (containerRef.current) {
			containerRef.current.style.cursor = 'grab'
		}
	}

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || !containerRef.current) return
		const x = e.pageX - containerRef.current.offsetLeft
		const walk = (x - startX) * 1.5 // Increase the multiplier to adjust sensitivity
		containerRef.current.scrollLeft = scrollLeft - walk
	}

	return (
		<div
			className='draggable-container'
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeaveOrUp}
			onMouseUp={handleMouseLeaveOrUp}
		>
			<div ref={containerRef}>{children}</div>
		</div>
	)
}

export default Draggable
