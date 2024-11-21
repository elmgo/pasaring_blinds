export default function HomeSection4() {
	return (
		<div className='relative bg-black/5'>
			<img
				src='/assets/logohalf.png'
				alt=''
				className='absolute bottom-0 md:bottom-auto md:top-0 left-0 md:h-full opacity-5'
			/>
			<div className='content  flex gap-50 flex-col  relative'>
				<h2 className='text-left text-primary'>What They Say</h2>
				<div className='md:flex gap-50 w-full'>
					<div className='card md:w-1/3 mb-40 md:mb-0 flex flex-col'>
						<div className='flex-1 text-[16px]'>
							We found out about Innostruct via a friend
							recommendation and were impressed with the positive
							comments. The experience with David was really
							insightful and the installation done within just a
							couple of hours. Really impressive!
						</div>
						<div className='font-semibold text-[16px] mt-20'>
							- Lee Chen Kai
						</div>
					</div>
					<div className='card md:w-1/3 flex flex-col mb-40 md:mb-0'>
						<div className='flex-1'>
							The installers were very meticulous and ensured that
							we knew how the blinds worked before leaving our
							house. They were very thoughtful and professional
							throughout our whole experience. Will recommend
							others to Innostruct.
						</div>
						<div className='font-semibold text-[16px] mt-20'>
							- David Lee
						</div>
					</div>
					<div className='flex flex-col card md:w-1/3 mb-40 md:mb-0'>
						<div className='flex-1'>
							I had the most pleasant experience with David. He
							was patient and transparent in providing the
							available products and solutions. I was thoroughly
							surprised how other grille companies do not have
							such necessary safety features. Innostruct is the
							only company I will work with knowing that.
						</div>
						<div className='font-semibold text-[16px] mt-20'>
							- Irene Chen
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
