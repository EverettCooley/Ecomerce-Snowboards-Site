import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

export default function NavBar() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            if (window.scrollY > 75) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);

    return (
        <div className={sticky ? 'sticky' : ''}>
            <nav className='nav'>
                <ul className='nav-items'>
                    <li className='nav-item'><Link className='link' to='/'>Snowboards</Link></li>
                    <li className='nav-item'><Link className='link' to='/bindings'>Bindings</Link></li>
                    <li className='nav-item'><Link className='link' to='/boots'>Boots</Link></li>
                    <li className='nav-item'><Link className='link' to='/about'>About Us</Link></li>
                </ul>
                <Link className='sign-up' to='/signUp'>
                    <span className='sign-up-text'>Sign Up</span>
                </Link>
            </nav>
        </div>
    )
}
