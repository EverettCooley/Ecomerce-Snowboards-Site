import React from 'react'
import { Link } from 'react-router-dom'

export default function SnowboardTile({snowboard}) {
    return (
        <Link to={'snowboards/' + snowboard.id} className="snowboard-tile">
            <div className='tile-body'>
                {/* <div className='tile-new'>NEW</div> */}
                <img className="snowboard-img" src={snowboard.image} alt="Not Found"></img>
            </div>
            <div className='tile-footer'>
                <div className='tile-footer-item'>{snowboard.name}</div>
                <div className='tile-footer-item'>{"$" + snowboard.price}</div>
            </div>
        </Link>
    )
}
