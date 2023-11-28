import {Link} from 'react-router-dom'
import './nav.css'
export function Navbar()
{
    return(
        <div>
            <div className='flex-container'>
                <div className='icon'><p className='text'><b>Crossword</b></p></div>
                <div><Link to="/home">Home</Link></div>
                <div><Link to="/catalogue">Catalog</Link></div>
                <div><Link to="/addbook">Add Books</Link></div>
                <div><Link to='/adduser'>Register</Link></div>
                <div></div>
            </div>
        </div>
    );
}