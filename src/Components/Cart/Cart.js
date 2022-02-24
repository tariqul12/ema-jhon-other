import React from 'react';

const Cart = (props) => {
    // console.log(props.cart)
    const cart= props.cart;
    // console.log(cart);
    // const total=cart.reduce((total,product)=>total+product.price,0)
    let total=0;
    let shipping=0;
    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total+=product.price;
        shipping+=product.shipping;
    }
    let tax=total/100;
    return (
        <div>
            <h2>this is cart: {cart.length}</h2>
            <h3>Total Price:{total.toFixed(2)}</h3>
            <h5>Product shipping :{shipping.toFixed(2)}</h5>
            <h5>tax:{tax.toFixed(2)}</h5>
            <h3>total amount{total+shipping +tax}</h3>
        </div>
    );
};

export default Cart;