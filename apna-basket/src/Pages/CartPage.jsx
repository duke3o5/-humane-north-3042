import React, { useState,useEffect } from 'react'
import { Container, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import "../Styling/User/cart.css"
import axios from 'axios';
import cart from '../assets/cart.png'

const Cart = () => {
    const [cart,Cart]=useState([]);
    const [total,Total]=useState(0);
    const [cpn,Cpn]=useState(0);
    const [text,Text]=useState('');
    const navigate=useNavigate();
    const toast=useToast();


    function getCart(){
      axios.get('https://big-basket-api.onrender.com/Cart')
      .then((res)=>Cart(res.data));
    }

    function qtyFn(el,value){
      axios.patch(`https://big-basket-api.onrender.com/Cart/${el.id}`,{qty:el.qty+value})
      .then(()=>getCart())
    }

    useEffect(() => {
        getCart();
    }, [cart]);

    useEffect(()=>{
      let sum=0;
      cart.forEach(el=>sum+=el.Price*el.qty)
      Total(sum)
    },[cart])
    
    function cpnFn(){
      if(cpn===(0)&&text&&text==='ab100'){
        Cpn(100);
        toast({
      position:'top',
      title: 'Coupan Applied Successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
      })
      //   }else if(cpn===100&&text&&text==='ab200'){
      //     Cpn(200)
      //     toast({
      //   position:'top',
      //   title: 'Coupan Applied Successfully',
      //   status: 'success',
      //   duration: 3000,
      //   isClosable: true,
      // })
      }else{
        toast({
          position:'top',
          title: 'Invalid Coupan !',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
    }

    const remove = (id) => {
        axios.delete(`https://big-basket-api.onrender.com/Cart/${id}`)
        .then(()=>getCart())
        // Cart();
    };


    if(cart.length===0){
      return <div>
      <img src={cart} />
      <h1 style={{fontSize:'50px',width:'fit-content',margin:'100px auto'}}>Your basket is empty !  Continue shopping...</h1>
      </div>
    }else{
  return (
    <Container maxW={1210}>
    <div>
    <h1 style={{fontSize:'20px',width:'fit-content',margin:'40px 0 0',borderBottom:'3px solid #84c225'}}>Your Basket ({cart.length} items)</h1>
    <hr />
        <div id="main">
          
            <div>
              
                {cart.map((el)=>{
                return <div key={el.id} style={{margin:'10px'}}>
                    <img src={el.Image}/>
                    <div>
                        <h3>{el.category}</h3>
                        <p id="Size">{el.name}</p>
                        <p>Weight :<span> {el.Weight} / pack</span></p>
                        <div id="qnty">
                            <p>Qty :</p>
                            <div id="minus" onClick={()=>qtyFn(el,-1)}>-</div>
                            <span id="quantity"> {el.qty} </span>
                            <div id="plus" onClick={()=>qtyFn(el,1)}>+</div>
                        </div>
                        <p id="cost">₹ <span>{el.Price}</span></p>
                        <button onClick={()=>remove(el.id)}>REMOVE</button>
                    </div>
                </div>
                })}

            
            </div>
            <div>
                <div id="cpn">
                    <h3>COUPONS</h3>
                    <h3></h3>
                    <input value={text} onChange={(e)=>Text(e.target.value)} type="text" placeholder="Coupon Code"/>
                    <button onClick={cpnFn}>APPLY</button>
                </div>
                <div id="prcDtl">
                    <h3>PRICE DETAILS</h3>
                    <div>
                        <p>Total</p>
                        <p>₹ <span id="tprice">{total}</span></p>
                    </div>
                    <div>
                        <p>Coupon Discount</p>
                        <p>-₹ <span id="dscnt">{cpn}</span></p>
                    </div>
                    <div>
                        <p>Delivery Charge</p>
                        <p>Free</p>
                    </div>
                </div>
                <div id="finalPrice">
                    <div>
                        <h4>Total Amount</h4>
                        <h4>₹ <span id="tamnt">{total-cpn}</span></h4>
                    </div>
                    <button onClick={()=>navigate('/products')}>PLACE ORDER</button>
                </div>
            </div>
        </div>
    </div>
    </Container>
  )}
}

export default Cart