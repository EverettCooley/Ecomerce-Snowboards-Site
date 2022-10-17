import React, {useState, useEffect, useContext} from 'react'
import SnowboardFinder from '../apis/SnowboardFinder.js';
import SnowboardTile from './SnowboardTile.jsx';
import { SnowboardsContext } from "../context/SnowboardsContext.jsx";

export default function SnowboardsList() {
    const [searchTerm, setSearchTerm] = useState('');
    const {snowboards, setSnowboards} = useContext(SnowboardsContext)

    useEffect(() => {
        console.log("use effect called")
        async function fetchData() {
        try {
            const response = await SnowboardFinder.get("/snowboards");
            setSnowboards(response.data);
        } catch (error) {
            console.log(error);
        }
        }
        fetchData();
    }, []);

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
