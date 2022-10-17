import React from 'react'
import SnowboardTile from './SnowboardTile.jsx';

export default function SnowboardsList({snowboards}) {
    return (
        <div className="snowboards-list">
            {snowboards.map(snowboard => (
                <SnowboardTile key={snowboard.id} snowboard={snowboard}/>
            ))}
        </div>
    )
}
