import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import './product.css';
const Product = (props) => {
    const {img,name,price,seller,category}=props.product;
    const handelAbddProduct=props.handelAbddProduct;
    return (
        <div className='container'>
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div>
            <h4 className='title'>{name}</h4>
            <h4>price:{price}</h4>
            <h5><small>Category:{category}</small></h5>
            <button onClick={()=>{handelAbddProduct(props.product)}}> <FontAwesomeIcon icon={faShoppingBasket} /> Buy Now</button>
            </div>
        </div>
    );
};

export default Product;