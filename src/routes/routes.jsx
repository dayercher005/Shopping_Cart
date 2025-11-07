import Home from "/src/pages/home/Home.jsx"
import About from "/src/pages/about/About.jsx"
import Shop from "/src/pages/shop/Shop.jsx"
import Cart from "/src/pages/cart/Cart.jsx"
import Error from "/src/pages/error/Error.jsx"

const routes = [

    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "About",
                element: <About />
            },
            {
                path: "Shop",
                element: <Shop />
            },
            {
                path: "Cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }
]

export default routes