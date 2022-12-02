import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { fullPromise } from "../utils/helpers";

function Item(item) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { image, name, _id, price } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      fullPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      fullPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="container my-12 mx-auto md:px-12">
      <div className="flex flex-wrap">
        <div className="my-1 bg-red-900 px-1 w-full lg:my-4 lg:px-4 rounded-lg shadow-lg justify-between leading-tight p-2 md:p-4" id="productCard">
          <article className="overflow-hidden ">
            <Link to={`/Products/${_id}`}>
              <img
                alt={name}
                className="box-content h-32 w-32 p-4 border-1"
                src={`/assets/${image}`}
              />
              <p className=" no-underline hover:underline text-grey-darker text-lg">{name}</p>
            </Link>
            <div>
              <span>${price}</span>
            </div>
            <button
              className=" py-2 px-4 rounded"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </article>
        </div>
      </div>
  </div>
  );
}

export default Item;
