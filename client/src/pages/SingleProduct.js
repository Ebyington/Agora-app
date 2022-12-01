import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import {
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { GET_PRODUCTS } from '../utils/queries';
import { fullPromise } from '../utils/helpers';
import CartItem from '../components/CartItem';

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



  return (
    
    <>
      {currentProduct && cart ? (
        <div className="container my-1">
          <Link to="/Products">← Back to Products</Link>

          <h2>{currentProduct.name}</h2>

          <p>{currentProduct.description}</p>

          <p>
            <strong>Price:</strong>${currentProduct.price}{' '}
            
          </p>

          <img
            src={`/assets/${currentProduct.image}`}
            alt={currentProduct.name}
          />
          <p>{currentProduct.reviews}</p>



        </div>

      ) : null}
      <CartItem />
    </>
  );
}

export default SinglePage;
