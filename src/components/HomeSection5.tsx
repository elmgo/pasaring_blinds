import DraggableComponent from './Draggable'

export default function HomeSection5() {
	return (
		<div className='content flex gap-100 flex-col bg-primary'>
			<h2 className='text-left text-white'>Case Studies</h2>
			<DraggableComponent>
				<div className='min-w-full bg-white'>
					<div className='inline-block w-[600px]'>
						<img src='/images/case1.jpg' alt='Mimosa Residences' />
						<p>Mimosa Residences</p>
					</div>
					<div className='inline-block w-[600px]'>
						<img
							src='/images/case2.jpg'
							alt='Ang Mo Kio 4-Room Flat'
						/>
						<p>Ang Mo Kio 4-Room Flat</p>
					</div>
					<div className='inline-block w-[600px]'>
						<img src='/images/case3.jpg' alt='9 Namly' />
						<p>9 Namly</p>
					</div>
				</div>
			</DraggableComponent>
		</div>
	)
}
