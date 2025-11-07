import Navbar from '/src/components/navbar/Navbar.jsx'
import { Outlet } from 'react-router'

export default function Home() {

    return(
        <div className="bg-linear-to-br from-pink-500 to-sky-600">
            <div className="flex justify-center">
                <Navbar></Navbar>
            </div>

            <Outlet />
        </div>
    )
}