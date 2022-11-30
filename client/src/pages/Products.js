import React, { useEffect } from 'react';
import Item from './Item';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_PRODUCTS } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
// import '../styles/product.css';



function Products() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {return state;});

  const { currentCategory } = state;

  const { loading, data } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (

    <div>
      <h2>Our Products:</h2>
      <div className="container my-12 mx-auto px-4 md:px-12">
  <div className="flex flex-wrap -mx-1 lg:-mx-4">
      {state.products ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <Item
              key={product._id}
              _id={product._id}
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
              stock={product.stock}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
    </div>
    </div>
    </div>
  );
}

export default Products;
