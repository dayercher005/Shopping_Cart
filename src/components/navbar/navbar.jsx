import NavButton from './NavButton.jsx'

export default function Navbar(){
    
    return(
        <div className="py-5">
            <NavButton name="About"></NavButton>
            <NavButton name="Shop"></NavButton>
            <NavButton name="Cart"></NavButton>
        </div>
    )
}