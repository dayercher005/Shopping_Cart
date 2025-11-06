import Home from "/src/pages/home/Home.jsx"
import Shop from "/src/pages/shop/Shop.jsx"
import Cart from "/src/pages/cart/Cart.jsx"

const routes = [

    {
        path: "/",
        element: <Home />
    },
    {
        path: "shop",
        element: <Shop />
    },
    {
        path: "cart",
        element: <Cart />
    }
]

export default routes