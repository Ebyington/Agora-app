import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_PRODUCTS, ADD_TO_CART, UPDATE_CART_QUANTITY } from '../utils/actions';
import { GET_PRODUCTS } from '../utils/queries';
// import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { fullPromise } from '../utils/helpers';

function SinglePage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(GET_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        fullPromise('products', 'put', product);
      });
    }
    else if (!loading) {
      fullPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      fullPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      fullPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  return (
    
    <>
      {currentProduct ? (
        <div className='singleBig'>
          <div className="singleContainer">
            <div className='topRight'>
              <Link to="/Products">← Back to Products</Link>
            </div>
            <div>
              <img src={`/assets/${currentProduct.image}`} alt={currentProduct.name} width="400px" height="550px"/>
            </div>
            
            <div>
              <h2>{currentProduct.name}</h2>
              <p>{currentProduct.description}</p>
              <p>
                <strong>Price:</strong>${currentProduct.price}{' '}
              </p>
              <button
              className="text-white font-bold py-2 px-4 rounded-full"
              onClick={addToCart}
            >
              Add to cart
            </button>
            </div>
            {/* <button
              className="text-white font-bold py-2 px-4 rounded-full"
              onClick={addToCart}
            >
              Add to cart
            </button> */}
          </div>

          <div className='reviews'>
            <p>{currentProduct.reviews}</p>
          </div>

        </div>
        
        

      ) : null}
    </>
  );
}

export default SinglePage;
