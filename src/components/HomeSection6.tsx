import BlogTiles from './BlogTiles'

export default function HomeSection6() {
	return (
		<div className='content flex gap-100 flex-col'>
			<h2 className='text-left'>Blog</h2>
			<BlogTiles
				// limit={3}
				blogs={[
					{
						imageUrl: '/assets/hero.jpg',
						title: 'This is a dummy title, and some more text',
						text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Curabitur sed quam sed nisl blandit cursus in porta
						tellus. Nullam sapien nunc, gravida sit amet maximus
						quis, aliquam a quis, rutrum nec ipsum.`,
					},
					{
						imageUrl: '/assets/hero.jpg',
						title: 'This is a dummy title and some',
						text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Curabitur sed quam sed nisl blandit cursus in porta
						tellus. Nullam sapien nunc, gravida sit amet maximus
						quis, aliquam a quis, rutrum nec ipsum.`,
					},
					{
						imageUrl: '/assets/hero.jpg',
						title: 'This is a dummy title',
						text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Curabitur sed quam sed nisl blandit cursus in porta
						tellus. Nullam sapien nunc, gravida sit amet maximus
						quis, aliquam a quis, rutrum nec ipsum.`,
					},
					{
						imageUrl: '/assets/hero.jpg',
						title: 'This is a dummy title',
						text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Curabitur sed quam sed nisl blandit cursus in porta
						tellus. Nullam sapien nunc, gravida sit amet maximus
						quis, aliquam a quis, rutrum nec ipsum.`,
					},
					{
						imageUrl: '/assets/hero.jpg',
						title: 'This is a dummy title',
						text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Curabitur sed quam sed nisl blandit cursus in porta
						tellus. Nullam sapien nunc, gravida sit amet maximus
						quis, aliquam a quis, rutrum nec ipsum.`,
					},
					{
						imageUrl: '/assets/hero.jpg',
						title: 'This is a dummy title',
						text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Curabitur sed quam sed nisl blandit cursus in porta
						tellus. Nullam sapien nunc, gravida sit amet maximus
						quis, aliquam a quis, rutrum nec ipsum.`,
					},
				]}
			/>
		</div>
	)
}
