import App from "./App.jsx"

const routes = [

    {
        path: "/",
        element: <App />
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