import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex flex-1 flex-col justify-center'>
			<h1 className='text-4xl min-h-screen'>Hello world!!!</h1>

			<a href='/about'>HTML Link</a>

			<Link href='/about'>
				<a>HTML Link</a>
			</Link>
		</div>
	);
}
