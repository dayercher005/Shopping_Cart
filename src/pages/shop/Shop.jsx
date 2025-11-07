import {useState, useEffect} from "react"

export default function Shop() {

    const [shop, setShop] = useState([])

    useEffect(() => {

        let ignore = false

        async function APICaller() {
            try{
                for(let index = 0; index < 24; index ++){
                    let itemScript = await fetch(`https://fakestoreapi.com/products/${index}`)
                    let itemData = await itemScript.json()
                    let itemName = itemData.title
                    let itemPrice = itemData.price
                    let itemDescription = itemData.description
                    let itemImage = itemData.image

                    if (!ignore){
                        setShop([...shop, {name: itemName, price: itemPrice, description: itemDescription, image: itemImage}])
                    }
                }
            }
            catch(error){
                return error
            }
        }

        APICaller()

        return(
            ignore = true
        )
    }, [])

    return(
        <div className="bg-linear-to-br from-pink-500 to-sky-600 h-screen">

        </div>
    )
}