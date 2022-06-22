import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    //Properties
    //Context
    //Hooks
    //Method
    //View

    return (
        <header>
            <script src="https://kit.fontawesome.com/7df403c81c.js" crossorigin="anonymous"></script>
            <Link className='logoImg' to='/'>
                <img src='data:image/png;base64,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' />
            </Link>
            <Link to='/'>
                <h1>Uni Organiser</h1>
            </Link>
            <div className="login">
                <p>Welcome Student!</p>
            </div>  
            
        </header>
    )
}

export default Header;