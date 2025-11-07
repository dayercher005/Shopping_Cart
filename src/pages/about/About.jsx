
import ShoppingIcon from "/src/assets/ShoppingIcon.png"

export default function About() {

    const AboutText = "Your one-stop shop for everything you need!"
    const AboutSubtext = "Add your favorite items to the cart and review them anytime before making your purchase."

    return (

        <div className="h-screen">

            <div className="flex justify-center items-center pt-100 gap-20 ">
                <img className="size-75" src={ShoppingIcon}></img>
                <div>
                    <h1 className="text-6xl font-Caveat font-bold pb-5">{AboutText}</h1>
                    <h2 className="text-3xl font-Caveat">{AboutSubtext}</h2>
                </div>
            </div>
        </div>

    )
}