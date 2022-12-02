import React, { useEffect } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PRODUCTS } from "../utils/actions";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../utils/queries";
import { fullPromise } from "../utils/helpers";
import '../styles/product.css';

function Products() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

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
        fullPromise("products", "put", product);
      });
    } else if (!loading) {
      fullPromise("products", "get").then((products) => {
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
    <div className="centerCon">
      <h2 className='cardTitle'>Our Products:</h2>
          {state.products ? (
            <div className="reveal flex" >
              {filterProducts().map((product) => (
                <Item
                  key={product._id}
                  _id={product._id}
                  name={product.name}
                  image={product.image}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </div>
          ) : (
            <h3>You haven't added any products yet!</h3>
          )}
          
      </div>
  );
}

export default Products;
