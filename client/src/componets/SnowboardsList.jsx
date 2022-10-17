import React, {useState} from 'react'
import SnowboardTile from './SnowboardTile.jsx';


export default function SnowboardsList({snowboards}) {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSearchTermChange(e) {
        setSearchTerm(e.target.value);
        console.log(e.target.value);
    }
    console.log(snowboards);
    return (
        <div className='snowboards-list-container'>
            <div className='nav-search-container'>
                <input className='nav-search' type="text" placeholder="Search Snowboards" onChange={handleSearchTermChange}></input>
            </div>
            <div className="snowboards-list">
                {snowboards.filter(item => {
                    if (searchTerm === ""){ return true}
                    else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())){ 
                        return true}
                    else {return false}
                }
                ).map(snowboard => (
                    <SnowboardTile key={snowboard.id} snowboard={snowboard}/>
                ))}
            </div>
        </div>

    )
}
