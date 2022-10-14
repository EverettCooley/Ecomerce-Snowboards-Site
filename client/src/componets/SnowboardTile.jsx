import React from 'react'

export default function SnowboardTile({snowboard}) {
    console.log(snowboard.image)
    return (
        <div className="snowboard-tile">
            {/* <div>{snowboard.name}</div>
            <div>{snowboard.brand}</div>
            <div>{snowboard.price}</div> */}
            <img className="snowboard-img" src={snowboard.image} alt="No image"></img>
        </div>
    )
}
