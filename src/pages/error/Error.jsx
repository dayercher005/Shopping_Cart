import { Link } from "react-router"

export default function Error() {

    return(
        <div>
            <h1>Oh no, this page doesn't exist!</h1>
            <Link to = "/">
                <button className="">Back to Home</button>
            </Link>
        </div>
    )
}