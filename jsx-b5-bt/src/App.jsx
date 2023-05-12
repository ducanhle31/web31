import { useState, useEffect} from 'react'
// fetch then render
const getProducts = async () =>{ 
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
};
let promise = getProducts();

function App() {
const [products, setProducts]= useState([])

//fetch by render
useEffect(() => {
  promise.then(setProducts )
},[])

//gọi api render dữ liệu
/* useEffect(() =>{
  const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
 
  };
  getProducts();
},[] ) */
  return (
    <>
     {<div>
      {products.map(product => <h3>{product.title} </h3>)}
     </div> }
     {/* <Suspense fallback={<div>Loading...</div>}>
<posts />
     </Suspense> */}
    </>
  )
}

export default App
