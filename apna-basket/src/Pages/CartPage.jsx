import {useState,useEffect} from "react";
// import {Link} from "react-router-dom";
import React from "react"
import './App.css';
const getData=async(url)=>{
  const res=await fetch(url);
  return await res.json();

};
function CartPage(){
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const [product,setUsers]=useState({});

  const fetchAndUpdateData= () => {
      setLoading(true);
      getData(`https://big-basket-api.onrender.com/Products`)
      
      .then((res)=>{
          console.log(res.data);
          setUsers(res);
      })
      .catch((err)=>{
          console.log(err);
          setError(true);
      })
      .finally(()=>setLoading(false));
  }
  useEffect(()=>{
      fetchAndUpdateData();
  },[]);





  const [cart,setCart]=useState([]);
  const [page,setPage]=useState("productpage");

const addToCart=(product)=>{

setCart([...cart,product])

}




 
  return loading ?  ( <h1>Loading...</h1> ) : error ? ( <h1>something went wrong please refresh</h1> ) : (
      <>
      {page==="productpage" && (<>
      <h1 id="trend">The Trendiest Picks</h1>
      <p   id="most">Most Popular Must-haves</p>
      <div className="productpage">
      
      {product?.map((product) => (
          <div style={{textAlign:"center",height:"550px",width:"400px",boxShadow: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",border:"0px solid black"}}>
            
              <img src={product.Image} alt={product.id}/>
                <h3>{`${product.rating}`}</h3> 
                <p>{`${product.Weight}`}</p>
                <h3>{`${product.category}`}</h3>
                <h3>{`${product.Price}`}</h3>
                <h3>{`${product.name}`}</h3>
              
        
              {/* <button onClick={()=>addToCart(product)} className ="btn">Add to Cart</button> */}
          </div>
          
      ))}
      </div>
      </>)} 
      </>)
}

export default CartPage;
