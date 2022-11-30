import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar () {
    return(
        <nav className="navbarstyle">
            <ul>
                <li className='firstitem'>
                <Link to="/"> Home</Link> 
                </li>
                <li className='seconditem'>
                   <Link to="/login"> Profile </Link> 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar