import React from "react";
import "./CartItem.css";
import {Link} from 'react-router-dom';

const CartItem = () => {
  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <img
          src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt="Product Name"
        />
      </div>

      <Link to={`/product/${111}`} className='cartItem__name'>
          <p>Producty 1</p>
      </Link>

      <p className='cartItem__price'>$499.99</p>

      <select className='cartItem__select'>
          <option value='1'>1</option>
          <option value='1'>2</option>
          <option value='1'>3</option>
          <option value='1'>4</option>
          <option value='1'>5</option>
      </select>

      <button className='cartItem__deleteBtn'>
          <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default CartItem;
