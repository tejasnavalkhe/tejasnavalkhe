import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer1 from '../Components/Footer/Footer1';

const Main = () => {
    return (
        <div className='main-page-area'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer1></Footer1>
        </div>
    );
};

export default Main;