import Home from "/src/pages/home/Home.jsx"
import Shop from "/src/pages/shop/Shop.jsx"
import Cart from "/src/pages/cart/Cart.jsx"

const routes = [

    {
        path: "/",
        element: <Home />
    },
    {
        path: "Shop",
        element: <Shop />
    },
    {
        path: "Cart",
        element: <Cart />
    }
]

export default routes