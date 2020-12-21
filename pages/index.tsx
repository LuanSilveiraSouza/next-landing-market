import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex flex-1 justify-center'>
			<h1 className='text-4xl md:text-9xl'>Hello world!!!</h1>

			<a href='/about'>HTML Link</a>

			<Link href='/about'>
				<a>HTML Link</a>
			</Link>
		</div>
	);
}
