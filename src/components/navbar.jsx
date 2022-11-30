import { Link } from 'react-router-dom';

function Navbar () {
    return(
        <nav className="navbarstyle">
            <ul>
                <li style={{display:'inline',textDecoration:'none'}}>
                <Link to="/"> Home</Link> 
                </li>
                <li style={{display:'inline',marginLeft:'40px'}}>
                   <Link to="/login"> Profile </Link> 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar