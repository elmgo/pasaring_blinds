import DraggableComponent from '../Draggable'

const items = [
	{ image: '/assets/hero.jpg', title: 'Heres demo text' },
	{ image: '/assets/hero.jpg', title: 'Heres demo text' },
	{ image: '/assets/hero.jpg', title: 'Heres demo text' },
	{ image: '/assets/hero.jpg', title: 'Heres demo text' },
]

export default function HomeSection5() {
	return (
		<div className='content !px-0 !py-50 flex gap-50 flex-col bg-primary text-white'>
			<h2 className='px-20 md:px-50 lg:px-100 mb-0 text-left text-white'>
				Case Studies
			</h2>
			<DraggableComponent>
				<div className='px-20 md:px-50 lg:px-100 pointer-events-none select-none noscroll'>
					{items.map((item, index) => (
						<>
							<div
								className={`${
									index === items.length - 1 &&
									'md:!mr-50 lg:!mr-100'
								} mr-30 inline-block w-300 md:w-600`}
							>
								<img
									className='rounded-lg block mb-20'
									src={item.image}
									alt={item.title}
								/>
								<h3 className=''>{item.title}</h3>
							</div>
						</>
					))}
				</div>
			</DraggableComponent>
		</div>
	)
}
