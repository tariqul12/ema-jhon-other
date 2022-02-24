import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setproducts]=useState([])
    const [cart,setcart]=useState([]);
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON`)
        .then(res=>res.json())
        .then(data=>setproducts(data))
        .catch(error=>console.log(error))
        },[]);
    //    const p= products.slice(0,20);
       const handelAbddProduct=( props)=>{
        //    console.log("add Product",props);
        const newCart=[...cart,props]
           setcart(newCart)
       }
    return (
        <div className='container'>
            <div className='shop-container'>
            <h6>{products.length}</h6>
            
            {
                products.map(product=><Product 
                    product={product} 
                    handelAbddProduct={handelAbddProduct}
                    key={product.key}></Product>)
            }
            </div>
            <div className='card'>

            <div className='cart-container'>
                <Cart cart={cart}  />
            </div>
            </div>
            
            
        </div>
    );
};

export default Shop;