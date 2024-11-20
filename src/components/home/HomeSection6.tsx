import Link from 'next/link'
import BlogTiles from '../BlogTiles'

export default function HomeSection6() {
	return (
		<div className='content flex gap-50 flex-col'>
			<div className='flex items-center'>
				<h2 className='flex-1 text-left'>Blog</h2>
				<Link href='/blog'>
					<button className='button-reverse'>View blog</button>
				</Link>
			</div>
			<BlogTiles limit={3} />
		</div>
	)
}
