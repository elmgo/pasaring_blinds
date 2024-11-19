export default function HomeSection2() {
	const sections = [
		{
			title: 'Pioneering Smart Window Solutions',
			text: 'At InnoStruct, innovation drives everything we do. We combine years of experience in home automation and design to create products that are not only functional but forward-thinking.',
		},
		{
			title: 'Commitment to Quality',
			text: "Our commitment to excellence doesn't end at installation - we provide continuous support and service to make sure your system performs flawlessly over time.",
		},
		{
			title: 'Client-Centric Approach',
			text: 'At InnoStruct, every project starts with understanding your unique needs. From consultation to installation, we focus on creating solutions that fit seamlessly into your lifestyle.',
		},
	]

	function renderSections(section: any, index: any) {
		return (
			<>
				<div className='md:w-1/3 text-white'>
					<h3 className='text-white/70 leading-tight mb-20'>
						<div className='inline-block text-[20px] translate-y-[6px] align-top mr-10'>
							0{index + 1}
						</div>
						{section.title}
					</h3>
					<div>{section.text}</div>
				</div>
				{index < sections.length - 1 && (
					<div className='my-40 md:my-0 h-1 md:h-auto md:w-[1px] text-0 bg-white/20'>
						&nbsp;
					</div>
				)}
			</>
		)
	}

	return (
		<div className='relative bg-primary'>
			<img
				style={{ opacity: 0.03 }}
				src='/assets/logohalf.png'
				className='-scale-y-100 md:-scale-100 absolute top-0 right-0 md:h-full opacity-5 invert brightness-0'
			/>
			<div className='content flex flex-col gap-80 items-center'>
				<h2 className='text-left text-white'>Why Choose Us</h2>
				<div className='text-white md:flex w-full gap-50 lg:gap-100'>
					{sections.map((s, i) => renderSections(s, i))}
				</div>
			</div>
		</div>
	)
}
