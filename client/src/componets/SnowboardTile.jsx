import React from 'react'

export default function SnowboardTile({snowboard}) {
    return (
        <div className="snowboard-tile">
            <div className='tile-body'>
                {/* <div className='tile-new'>NEW</div> */}
                <img className="snowboard-img" src={snowboard.image} alt="No image"></img>
            </div>
            <div className='tile-footer'>
                <div className='tile-footer-item'>{snowboard.name}</div>
                <div className='tile-footer-item'>{"$" + snowboard.price}</div>
            </div>
        </div>
    )
}
