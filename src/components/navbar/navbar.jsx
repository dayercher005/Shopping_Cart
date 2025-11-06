import NavButton from './NavButton.jsx'

export default function Navbar(){
    
    return(
        <div className="mt-5">
            <NavButton name="Home"></NavButton>
            <NavButton name="Shop"></NavButton>
            <NavButton name="Cart"></NavButton>
        </div>
    )
}