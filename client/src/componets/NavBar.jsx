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
                    <Link className='link nav-item' to='/'>Snowboards</Link>
                    <Link className='link nav-item' to='/bindings'>Bindings</Link>
                    <Link className='link nav-item' to='/boots'>Boots</Link>
                    <Link className='link nav-item' to='/about'>About Us</Link>
                </ul>
                <Link className='sign-up' to='/signUp'>
                    <span className='sign-up-text'>Sign Up</span>
                </Link>
            </nav>
        </div>
    )
}
