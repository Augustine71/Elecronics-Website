import React from 'react'

export const IndividualProduct = ({individualProduct, addToCart}) => {
    // console.log(individualProduct);
    const handleAddToCart=()=>{
        addToCart(individualProduct);
    }   
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualProduct.images[0]} alt="product-img"/>
            </div>
            <div className='product-text title'>{individualProduct.name}</div>
            <div className='product-text description'>{individualProduct.desc}</div>
            <div className='product-text price'>$ {individualProduct.price}</div>
            <div className='btn btn-danger btn-md cart-btn' onClick={handleAddToCart}>ADD TO CART</div>
        </div> 
    )
}