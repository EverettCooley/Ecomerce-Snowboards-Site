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
}
