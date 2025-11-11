import React from 'react'
import Navbar from '/src/components/navbar/Navbar.jsx'
import { Outlet } from 'react-router'

export default function Home() {

    const [cartItems, setCartItems] = React.useState([])

    return(
        <div className="h-screen bg-linear-to-br from-pink-500 to-sky-600">
            <div className="flex justify-center">
                <Navbar></Navbar>
            </div>

            <Outlet context={[cartItems, setCartItems]}/>
        </div>
    )
}