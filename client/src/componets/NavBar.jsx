<<<<<<< HEAD
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
            </nav>
        </div>
    )
=======
import React from 'react'
import {Link} from 'react-router-dom';

export default function NavBar({setSearchTerm}) {

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  }

  return (
    <nav className='nav'>
        <ul className='nav-items'>
            <li className='nav-item'><Link className='link' to='/'>Snowboards</Link></li>
            <li className='nav-item'><Link className='link' to='/bindings'>Bindings</Link></li>
            <li className='nav-item'><Link className='link' to='/boots'>Boots</Link></li>
            <li className='nav-item'><Link className='link' to='/about'>About Us</Link></li>
        </ul>
        <div className='nav-search-container'>
            <input className='nav-search' type="text" placeholder="Search" onChange={handleSearchTermChange}></input>
        </div>
    </nav>
  )
>>>>>>> cad3e0d518a7e6dd5bf31c6fabdb7dd0db0fa8a0
}
