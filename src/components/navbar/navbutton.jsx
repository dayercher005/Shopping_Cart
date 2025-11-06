import { Link } from "react-router"

export default function NavButton({name}) {

    return(
        <Link to={name}>
            <button className="rounded-xl p-4 text-xl">{name}</button>
        </Link>
    )
}