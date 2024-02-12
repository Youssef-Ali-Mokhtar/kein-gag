import { Link } from "react-router-dom";
import Classes from './Navbar.module.css';

const Navbar = () => {
    return ( <nav className={Classes['navbar']}>
        <p className={Classes['title']}><Link to="/">KeinGAG</Link></p>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav> );
}
 
export default Navbar;