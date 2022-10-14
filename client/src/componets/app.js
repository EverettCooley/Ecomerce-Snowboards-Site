import React from 'react'
import SnowboardsList from './SnowboardsList.jsx';
import '../css/app.css'

function App() {
    return (
        <>
            {/* <div>Hello</div> */}
            <SnowboardsList snowboards={snowboards}/>
        </>
    )
}

const snowboards = [
{
    id: 1,
    name: 'Rome Artifact Rocker', 
    price: 100,
    sizes: [152, 155, 157, 162],
    brand: "Rome",
    stars: 0,
    image: "https://cdn.shopify.com/s/files/1/0170/0000/products/2022_Disruptor.jpg?v=1632429686"
},
{
    id: 2,
    name: 'Burton Custom Flying V',
    price: 200,
    sizes: [152, 155, 157, 162],
    brand: "Burton",
    stars: 0,
    image: "https://cdn.shopify.com/s/files/1/0170/0000/products/2022_Disruptor.jpg?v=1632429686"
}
]



export default App;