import Navbar from "/src/components/navbar/Navbar.jsx"
import ShoppingIcon from "/src/assets/ShoppingIcon.png"

export default function Home() {

    const HomeText="Your one-stop shop for everything you need!"

    return (

        <div className="bg-linear-to-br from-pink-500 to-sky-600 h-screen">
            <div className="flex justify-center">
                <Navbar></Navbar>
            </div>

            <div className="flex justify-center items-center pt-100 gap-20">
                <img className="size-75" src={ShoppingIcon}></img>
                <p className="text-4xl font-Caveat font-bold">{HomeText}</p>
            </div>
        </div>

    )
}