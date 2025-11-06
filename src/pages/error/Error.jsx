import { Link } from "react-router"

export default function Error() {

    return(
        <div className="h-screen bg-linear-to-br from-pink-500 to-sky-600">
            <h1>Oh no, this page doesn't exist!</h1>
            <Link to = "/">
                <button className="rounded-2xl bg-neutral-400/60 hover:bg-slate-900 hover:text-white
                p-2">Back to Home</button>
            </Link>
        </div>
    )
}