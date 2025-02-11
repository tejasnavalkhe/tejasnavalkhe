import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer/Footer2';

const Layout2 = () => {
    return (
        <div className='main-page-area2'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer2></Footer2>
        </div>
    );
};

export default Layout2;