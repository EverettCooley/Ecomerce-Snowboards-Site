import { useParams } from 'react-router-dom'
import { SnowboardsContext } from "../context/SnowboardsContext.jsx";
import React, {useState, useEffect, useContext} from 'react'

export default function SnowboardDetails() {
    const {snowboards, setSnowboards} = useContext(SnowboardsContext)
    const {id} = useParams();
    const snowboard = snowboards.find(snowboard => snowboard.id === parseInt(id));
    return (
        <div className='snowboard-details-container'>
            <div className='left-side-details'>
                <img className="snowboard-details-img" src={snowboard.image} alt="Not Found"></img>
                <div className='snowboard-details-sizes-title'>Snowboard Sizes</div>
                <div className='snowboard-details-sizes-list'>
                    {snowboard.sizes.map(size => (
                        <div className='snowboard-details-size'>{size}</div> 
                    ))}
                </div>
            </div>
            <div className='right-side-details'>
                <div className='snowboard-detail snowboard-details-name'>{"Name: " + snowboard.name}</div>
                <div className='snowboard-detail snowboard-details-price'>{"price: $" + snowboard.price}</div>
                {/* <div className='snowboard-detail snowboard-details-brand'>{"Brand Name: " + snowboard.brand}</div> */}
                <div className='snowboard-detail snowboard-details-stars'>{"Number of stars: " + snowboard.stars}</div>
                <button className='button-9'>Buy now</button>
            </div>
        </div>

    )
}
