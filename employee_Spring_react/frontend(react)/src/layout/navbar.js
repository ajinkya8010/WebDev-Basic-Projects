import {Link} from 'react-router-dom'
import './nav.css'
export function Navbar()
{
    return(
        <div>
            <div className='flex-container'>
                <div><Link to="/home">Home</Link></div>
                <div><Link to="/view">Employee List</Link></div>
                <div><Link to="/add">Add Employee</Link></div>
                <div><Link to="/remove">Fire</Link></div>
            </div>
           
        </div>
    );
}