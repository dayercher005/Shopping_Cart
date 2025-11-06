import Home from "/src/pages/home/Home.jsx"
import Shop from "/src/pages/shop/Shop.jsx"
import Cart from "/src/pages/cart/Cart.jsx"
import Error from "/src/pages/error/Error.jsx"

const routes = [

    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "Shop",
        element: <Shop />,
        errorElement: <Error />
    },
    {
        path: "Cart",
        element: <Cart />,
        errorElement: <Error />
    }
]

export default routes