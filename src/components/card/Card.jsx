import { useState } from "react"

export default function Card({name, price, image}){

    const [quantity, setQuantity] = useState(0)

    return(
        <div className="bg-white rounded-2xl hover:scale-105 w-100 transition">
            <h1 className="text-4xl">{name}</h1>
            <img className="size-50" src={image}></img>
            <p className="text-3xl text-center">USD {price}</p>
        </div>
    )
}