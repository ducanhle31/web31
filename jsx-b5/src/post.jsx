import { useEffect, useState } from "react";
const getProducts= async ()=>{const res = await fetch("https://dummyjson.com/users");
const data = await res.json();
return data.products;
};
export default function Posts(){
    const [ products, setProducts]= use(getProducts);
    useEffect(()=>
    {getProducts().then(setProducts);},[]);
    return(
        <div>
            {products.map((product) =>(h3
            ))}
        </div>
        )
}