import { useOutletContext } from 'react-router-dom'
import Receipt from '/src/components/receipt/Receipt.jsx'
import binIcon from '/src/assets/bin.svg'

export default function Cart() {

    const [cartItems, setCartItems] = useOutletContext();

    const CartItemsRemover = () => {
        setCartItems(cartItems => cartItems.filter(item => item.name !== item.name))
    }

    const cartList = cartItems.map(item => 
        <div className="flex justify-center">
            <h1 className="flex-4/10 font-Caveat text-3xl p-2.5">{item.name}</h1>
            <p className="flex-3/10 font-Caveat text-3xl p-2.5">{item.quantity}</p>
            <p className="flex-2/10 font-Caveat text-3xl p-2.5">USD {item.quantity * item.price}</p>
            <div className="flex-2/10 text-center">
                <button onClick={CartItemsRemover} className=" rounded-xl border-2 p-1.5 mt-1.5 hover:scale-110 hover:bg-slate-300 transition">
                    <img className=" size-7" src={binIcon} />
                </button>
            </div>
        </div>
    )


    const priceCalculator = cartItems.reduce((total, currentItem) => {
        return total + (currentItem.price * currentItem.quantity);
    }, 0);
         

    return (
        <Receipt cartList={cartList} totalPrice={priceCalculator}>
        </Receipt>
    )
}