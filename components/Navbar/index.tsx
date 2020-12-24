import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';

import NavLink from './NavLink';

const NavBar: React.FC = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	return (
		<div className='fixed w-full h-20'>
			<div className='flex justify-between items-center px-4 md:px-8 bg-primary-yellow h-20'>
				<div className='flex justify-between items-center w-48'>
					<FiShoppingCart className='text-xl' />

					<Link href='/'>
						<h1 className='text-xl text-black break-words cursor-pointer'>
							Landing Market
						</h1>
					</Link>
				</div>

				<button onClick={() => setShowMenu(!showMenu)} className='flex sm:hidden text-xl focus:border-none'>
					<FiMenu />
				</button>

				<div className={`${showMenu ? 'left-0' : 'left-full'} absolute top-20 w-full sm:w-auto sm:static flex justify-around sm:justify-between items-center bg-primary-yellow transition-all duration-500 ease-in-out`}>
					<NavLink path='/' label='Página Inicial' />
					<NavLink path='/contact' label='Contato' />
					<NavLink path='/about' label='Sobre' />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
