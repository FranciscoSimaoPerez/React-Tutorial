import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="navbar navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">To Do List</Link>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/about" className="nav-link" >About</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header

