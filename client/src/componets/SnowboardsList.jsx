import React from 'react'
import SnowboardTile from './SnowboardTile.jsx';

export default function SnowboardsList({snowboards}) {
    return (
        <>
            {snowboards.map(snowboard => (
                <SnowboardTile key={snowboard.id} snowboard={snowboard}/>
            ))}
        </>
    )
}
