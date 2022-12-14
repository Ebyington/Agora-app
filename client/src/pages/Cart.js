import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { GO_CHECKOUT } from '../utils/queries';
import { fullPromise } from '../utils/helpers';
import CartItem from '../components/CartItem';
import Auth from '../utils/auth';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_MULTIPLE_TO_CART } from '../utils/actions';
import '../styles/home.css';

const stripePromise = loadStripe('pk_test_51M9HYMKvhJVBquanDqSOtkEIJPPBswKxoRWtjEz55zI2CbMbIewgZyZvP6mYOptbKMp5DFMOZHx9wVZeES4gDYvv005nMgscAk');

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [getCheckout, { data }] = useLazyQuery(GO_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await fullPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="centerCon">
        <h1 className='cardTitle'>Shopping Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="centerCon mt-10 ">
      <h2 className='cardTitle'>Shopping Cart</h2>
      {state.cart.length ? (
        <div className="centerCard">
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="cardTitle">
            <strong>Total: ${calculateTotal()}</strong>
            {Auth.loggedIn() ? (
              <button className="rounded p-3 m-3 " onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(Please login to checkout.)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>

          Cart is Empty!

        </h3>
      )}
    </div>
  );
};

export default Cart;
