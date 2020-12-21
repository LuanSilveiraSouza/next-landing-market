import Navbar from './Navbar';

const Layout: React.FC = ({ children }) => {
    return (
        <div className='flex flex-1 flex-col'>
            <Navbar />

            {children}
        </div>
    )
}

export default Layout;