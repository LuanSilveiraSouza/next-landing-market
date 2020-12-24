import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex flex-1 flex-col justify-center'>
			<section className='relative flex justify-center items-center h-screen w-full'>
				<Image
					src='/images/market2.jpg'
					alt='Mercado'
					layout='fill'
					quality={100}
				/>

				<div className='absolute inset-0 h-full w-full bg-black bg-opacity-60 text-white flex flex-col justify-center items-center'>
					<h1 className='text-6xl'>Landing Market</h1>
				</div>
			</section>
		</div>
	);
}
