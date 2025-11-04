import { Link } from "react-router"

export default function NavButton({name}) {

    return(
        <div>
            <Link to={name}>{name}</Link>
        </div>
    )
}