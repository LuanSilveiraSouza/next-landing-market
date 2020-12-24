const FooterCard: React.FC = ({ children }) => {
	return (
		<div className='flex flex-col aligm-center h-full w-24 sm:w-60 px-4 mx-4 my-2 border-secundary-blue border-l-2 border-r-2'>
            {children}
		</div>
	);
};

export default FooterCard;
