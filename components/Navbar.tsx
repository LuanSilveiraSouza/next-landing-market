import Link from 'next/link';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';

const Navbar: React.FC = () => {
	return (
		<div className='fixed w-full h-20'>
			<div className='flex justify-between items-center px-4 md:px-16 bg-primary-yellow h-20'>
				<div className='flex justify-between items-center w-48'>
					<FiShoppingCart className='text-xl' />

					<Link href='/'>
						<h1 className='text-xl text-black break-words cursor-pointer'>
							Landing Market
						</h1>
					</Link>
				</div>

				<button className='flex sm:hidden text-xl focus:border-none'>
					<FiMenu />
				</button>

				<div className='hidden sm:flex justify-between items-center'>
					<Link href='/'>
						<a className='flex aligm-center justify-center w-20 md:w-36 mx-2 p-4 hover:bg-secundary-yellow hover:underline transition-colors duration-200 ease-linear cursor-pointer'>
							Página Inicial
						</a>
					</Link>
					<Link href='/contact'>
						<a className='flex aligm-center justify-center w-20 md:w-36 mx-2 p-4 hover:bg-secundary-yellow hover:underline transition-colors duration-200 ease-linear cursor-pointer'>
							Contato
						</a>
					</Link>
					<Link href='/about'>
						<a className='flex aligm-center justify-center w-20 md:w-36 mx-2 p-4 hover:bg-secundary-yellow hover:underline transition-colors duration-200 ease-linear cursor-pointer'>
							Sobre
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
