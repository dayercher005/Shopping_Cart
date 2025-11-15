import NavButton from '/src/components/navbar/NavButton.jsx'

export default function Navigation(){
    
    return(
        <div className="py-5">
            <NavButton name="About" link="/"></NavButton>
            <NavButton name="Shop" link="Shop"></NavButton>
            <NavButton name="Cart" link="Cart"></NavButton>
        </div>
    )
}