import { useOutletContext } from 'react-router-dom'

export default function Cart() {

    const [cartItems] = useOutletContext();

    const cartList = cartItems.map(item => 
        <div className="flex justify-center">
            <h1 className="flex-5/10 font-Caveat text-3xl p-2.5">{item.item}</h1>
            <p className="flex-3/10 font-Caveat text-3xl p-2.5">{item.quantity}</p>
            <p className="flex-2/10 font-Caveat text-3xl p-2.5">USD {item.quantity * item.price}</p>
        </div>
    )

    const priceCalculator = cartItems.map(item => {
        let totalPrice = 0
        totalPrice += (item.price * item.quantity)
        return totalPrice
    })

    return (
        <div className="bg-linear-to-br from-pink-500 to-sky-600 h-screen">
            <div className="bg-white rounded-xl w-8/10 mx-auto">
                <div className="flex">
                    <h1 className="flex-5/10 font-bold font-Caveat text-5xl text-center border-b-4
                    border-x- border-b-neutral-400 w-1/10 after:content-[Items]">Items</h1>
                    <h1 className="flex-3/10 font-bold font-Caveat text-5xl">Quantity</h1>
                    <h1 className="flex-2/10 font-bold font-Caveat text-5xl">Price:</h1>
                </div>
                {cartList}

                <div className="flex">
                    <h1 className="flex-8/10 text-center font-Caveat text-5xl">Total Price</h1>
                    <h1 className="flex-2/10 font-Caveat text-5xl">{priceCalculator}</h1>
                </div>
            </div>
        </div>
    )
}