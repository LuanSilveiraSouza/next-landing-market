import Link from 'next/link';

interface NavLinkProps {
    path: string;
    label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ path, label }) => {
	return (
		<Link href={path}>
			<a className='flex aligm-center justify-center w-20 md:w-36 mx-2 p-4 hover:bg-secundary-yellow hover:underline transition-colors duration-200 ease-linear cursor-pointer'>
				{label}
			</a>
		</Link>
	);
};

export default NavLink;
