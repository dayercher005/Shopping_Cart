import Navbar from "/src/components/navbar/Navbar.jsx"
import ShoppingIcon from "/src/assets/ShoppingIcon.png"

export default function Home() {

    const HomeText = "Your one-stop shop for everything you need!"
    const HomeSubtext = "Add your favorite items to the cart and review them anytime before making your purchase."

    return (

        <div className="bg-linear-to-br from-pink-500 to-sky-600 h-screen">
            <div className="flex justify-center">
                <Navbar></Navbar>
            </div>

            <div className="flex justify-center items-center pt-100 gap-20 ">
                <img className="size-75" src={ShoppingIcon}></img>
                <div>
                    <h1 className="text-6xl font-Caveat font-bold pb-5">{HomeText}</h1>
                    <h2 className="text-3xl font-Caveat">{HomeSubtext}</h2>
                </div>
            </div>
        </div>

    )
}