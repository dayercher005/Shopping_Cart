import { Link } from "react-router"

export default function NavButton({name}) {

    return(
        <Link className="" to={name}>
            <button className="rounded-xxl p-4 text-2xl mx-15 hover:bg-">{name}</button>
        </Link>
    )
}