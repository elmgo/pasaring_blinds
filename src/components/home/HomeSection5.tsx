import DraggableComponent from '../Draggable'

const items = [
	{
		image: '/images/case_studies/Arc at Tampines.jpeg',
		title: 'Arc at Tampines',
	},
	{
		image: '/images/case_studies/Braddel Heights.jpeg',
		title: 'Braddel Heights',
	},
	{
		image: '/images/case_studies/Marina Bay Suites.jpeg',
		title: 'Marina Bay Suites',
	},
	{
		image: '/images/case_studies/Regency Suites.jpeg',
		title: 'Regency Suites',
	},
	{
		image: '/images/case_studies/The Peak Toa Payoh.jpeg',
		title: 'The Peak, Toa Payoh',
	},
	{ image: '/images/case_studies/Yishun HDB.jpeg', title: 'Yishun HDB' },
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
								<div
									style={{
										backgroundImage: `url('${item.image}')`,
									}}
									className='bg-cover rounded-xl aspect-video w-full'
								></div>
								{/* <img
									className='rounded-lg block mb-20'
									src={item.image}
									alt={item.title}
								/> */}
								<h3 className=''>{item.title}</h3>
							</div>
						</>
					))}
				</div>
			</DraggableComponent>
		</div>
	)
}
