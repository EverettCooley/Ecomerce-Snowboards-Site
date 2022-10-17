import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import React, {useState} from 'react'
import SnowboardsList from './SnowboardsList.jsx';
import NavBar from './NavBar.jsx';
import AboutUs from './AboutUs.jsx';
import '../css/app.css'
import BindingsList from './BindingsList.jsx';
import BootsList from './BootsList.jsx';


function App() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <Router>
            <NavBar setSearchTerm={setSearchTerm}/>
            <Routes>
                <Route path="/" element={<SnowboardsList searchTerm={searchTerm} snowboards={snowboards}/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/boots" element={<BindingsList/>}/>
                <Route path="/bindings" element={<BootsList/>}/>
            </Routes>
        </Router>
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
},
{
    id: 3,
    name: 'Burton Custom Flying V',
    price: 200,
    sizes: [152, 155, 157, 162],
    brand: "Burton",
    stars: 0,
    image: "https://cdn.shopify.com/s/files/1/0170/0000/products/2022_Disruptor.jpg?v=1632429686"
},
{
    id: 4,
    name: 'Burton Custom Flying V',
    price: 200,
    sizes: [152, 155, 157, 162],
    brand: "Burton",
    stars: 0,
    image: "https://cdn.shopify.com/s/files/1/0170/0000/products/2022_Disruptor.jpg?v=1632429686"
},
{
    id: 5,
    name: 'Burton Custom Flying V',
    price: 200,
    sizes: [152, 155, 157, 162],
    brand: "Burton",
    stars: 0,
    image: "https://cdn.shopify.com/s/files/1/0170/0000/products/2022_Disruptor.jpg?v=1632429686"
}
]



export default App;