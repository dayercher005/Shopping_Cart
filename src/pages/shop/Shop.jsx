import {useState, useEffect} from "react"
import Card from "/src/components/card/Card.jsx"

export default function Shop() {

    const [shop, setShop] = useState([])

    useEffect(() => {

        let ignore = false

        async function APICaller() {
            try{
                for(let index = 1; index < 15; index+=1){
                    const itemScript = await fetch(`https://fakestoreapi.com/products/${index}`)
                    const itemData = await itemScript.json()
                    const itemName = itemData.title
                    const itemPrice = itemData.price
                    const itemImage = itemData.image

                    if (!ignore){
                        setShop(shop => [...shop, {name: itemName, price: itemPrice, image: itemImage}])
                    }
                }
            }
            catch(error){
                return error
            }
        }

        APICaller();

        return () => {
            ignore = true
        }
    }, [])

    const ShopItems = shop.map((item) => 
        <Card name={item.name} image={item.image} price={item.price}></Card>
    )

    return(
        <div className="bg-linear-to-br from-pink-500 to-sky-600 h-screen grid grid-cols-5 gap-20">
            {ShopItems}
        </div>
    )
}