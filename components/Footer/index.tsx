import FooterCard from './FooterCard';

const Footer: React.FC = () => {
	return (
		<div className='flex flex-col pt-2 px-4 md:px-16 bg-primary-blue'>
			<div className='flex flex-wrap items-center justify-center w-full h-auto xl:h-40 py-4'>
				<FooterCard>
					<h1 className=''>Landing Market</h1>
					<h1>Página Inicial</h1>
					<h1>Contato</h1>
					<h1>Sobre</h1>
				</FooterCard>
				<FooterCard>
					<h1 className=''>Landing Market</h1>
					<h1>Página Inicial</h1>
					<h1>Contato</h1>
					<h1>Sobre</h1>
				</FooterCard>
				<FooterCard>
					<h1 className=''>Landing Market</h1>
					<h1>Página Inicial</h1>
					<h1>Contato</h1>
					<h1>Sobre</h1>
				</FooterCard>
				<FooterCard>
					<h1 className=''>Landing Market</h1>
					<h1>Página Inicial</h1>
					<h1>Contato</h1>
					<h1>Sobre</h1>
				</FooterCard>
			</div>

			<div className="flex w-full justify-center">
				<h1 className='text-white text-sm'>Made by Luan Souza</h1>
			</div>
		</div>
	);
};

export default Footer;
