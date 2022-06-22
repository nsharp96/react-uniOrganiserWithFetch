import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    //Properties
    //Context
    //Hooks
    //Method
 const getLinkStyle = ({isActive}) => ( isActive ? 'navSelected' : null);
    //View

    return (
        <nav>
            <div className='navItem'>
                <NavLink to='/' className={getLinkStyle} > Home </NavLink>
            </div>
            <div className='navItem'>
                <NavLink to='/modules' className={getLinkStyle} > My Modules </NavLink>
            </div>
            <div className='navItem'>
                <NavLink to='/assessments' className={getLinkStyle} > My Assessments </NavLink>
            </div>
            <div className='navItem'>
                <NavLink to='/schedule' className={getLinkStyle} > My Schedule </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;