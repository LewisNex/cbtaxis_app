import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './NavBar.scss'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='navbar'>
            <div className="logo"><Logo /></div>
            <ul>
                <li><Link to='/'>Create</Link></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>List</Link></li>
                <li><Link to='/'>Diary</Link></li>
                <li><Link to='/'>Users</Link></li>
            </ul>
        </div>
    );
}