import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const totalcart = cart[i];
        total= total +  totalcart.price
        total = Math.round(total)
    }
   
    let discount = (total / 10);
        const adddiscount = Math.round(total - Number(discount))
        const discountNum =  num => {
            const position = num.toFixed(2)
            return Number(position);
        }
    console.log(cart)
    return (
        <div>
        <p>Your total ordered courses: {cart.length}</p>
        <p> <small>Discount:$ {discountNum(discount)}</small> </p>
         <p className="price">Discount total Prise :$ {discountNum(adddiscount)}</p>
         <p className="price">total Prise :$ {total}</p>
         <button className="cartBtn">Enroll here</button>
        </div>
    );
};

export default Cart;