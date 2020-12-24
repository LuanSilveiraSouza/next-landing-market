import Footer from './Footer';
import NavBar from './Navbar';

const Layout: React.FC = ({ children }) => {
	return (
		<div className='flex flex-1 flex-col min-h-screen'>
			<NavBar />

			<div className='flex flex-1 flex-col mt-20 mb-16'>{children}</div>

			<Footer />
		</div>
	);
};

export default Layout;
