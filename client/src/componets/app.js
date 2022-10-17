import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import React from 'react'
import SnowboardsList from './SnowboardsList.jsx';
import NavBar from './NavBar.jsx';
import AboutUs from './AboutUs.jsx';
import '../css/app.css'
import BindingsList from './BindingsList.jsx';
import BootsList from './BootsList.jsx';
import SnowboardDetails from './SnowboardDetails.jsx';
import SignUp from './SignUp.jsx';
import Header from './Header.jsx';
import { SnowboardsContextProvider } from "../context/SnowboardsContext.jsx";

function App() {
    return (
        <SnowboardsContextProvider>
            <Router>
                <Header/>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<SnowboardsList/>}/>
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="/boots" element={<BindingsList/>}/>
                    <Route path="/bindings" element={<BootsList/>}/>
                    <Route path="snowboards/:id" element={<SnowboardDetails/>}/>
                    <Route path="/signUp" element={<SignUp/>}/>
                </Routes>
            </Router>
        </SnowboardsContextProvider>
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
    name: 'Mens Burton Process Flying V Snowboard',
    price: 400,
    sizes: [152, 155, 157, 162],
    brand: "Burton",
    stars: 0,
    image: "https://www.burton.com/static/product/W21/10712107000_1.png"
},

]



export default App;