import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

const Navbar: React.FC = () => {
	return (
		<div className='fixed w-full h-20'>
			<div className='flex justify-between items-center px-4 md:px-16 bg-primary-yellow h-20'>
				<h1 className='text-xl text-black break-words'>
					Landing Market
				</h1>

				<button className='flex sm:hidden text-xl focus:border-none'>
					<FiMenu />
				</button>

				<div className='hidden sm:flex justify-between items-center'>
					<div className='flex aligm-center justify-center w-20 md:w-36 mx-2 p-4 hover:bg-secundary-yellow transition-colors duration-200 ease-linear cursor-pointer'>
						<Link href='/'>
							<a>Página Inicial</a>
						</Link>
					</div>
					<div className='flex aligm-center justify-center w-20 md:w-36 mx-2 p-4 hover:bg-secundary-yellow transition-colors duration-200 ease-linear cursor-pointer'>
						<Link href='/contact'>
							<a>Contato</a>
						</Link>
					</div>
					<div className='flex aligm-center justify-center w-20 md:w-36 mx-2 p-4 hover:bg-secundary-yellow transition-colors duration-200 ease-linear cursor-pointer'>
						<Link href='/about'>
							<a>Sobre</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
