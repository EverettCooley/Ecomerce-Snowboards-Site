import React from 'react'
import SnowboardTile from './SnowboardTile.jsx';

export default function SnowboardsList({searchTerm, snowboards}) {
    console.log(snowboards);
    return (
        <div className="snowboards-list">
            {snowboards.filter(item => {
                if (searchTerm === ""){ return item}
                else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())){ 
                    return item}
                }
                ).map(snowboard => (
                <SnowboardTile key={snowboard.id} snowboard={snowboard}/>
            ))}
        </div>
    )
}
