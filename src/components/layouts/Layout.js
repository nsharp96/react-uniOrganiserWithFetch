import Header from './Header.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';

import './Layout.css';

const Layout = (props) => {
    //Properties
    //Context
    //Hooks
    //Method
    //View

    return (
        <div className='container'>

            <div className ='leftSide'>
                <Header />
                <Navbar />
            </div>

            <div className = 'rightSide'>
                <div className='main'> {props.children} </div>
                <div className='footer'> <Footer /> </div>
            </div>
        
    </div>
    );
}

export default Layout;