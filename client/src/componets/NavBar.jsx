import React from 'react'

export default function NavBar() {
  return (
    <div className='nav'>
        <div className='nav-items'>
            <div className='nav-item'>Home</div>
            <div className='nav-item'>Snowboards</div>
            <div className='nav-item'>Boots</div>
            <div className='nav-item'>Bindings</div>
        </div>
        <div className='nav-search-container'>
            <input className='nav-search' type="text" placeholder="Search"></input>
        </div>
    </div>
  )
}
