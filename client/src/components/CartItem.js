import React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { fullPromise } from "../utils/helpers";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    fullPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      fullPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      fullPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="container my-12 mx-auto md:px-12 marginZero">
      <div className="flex flex-wrap">
        <div className="my-1 bg-red-900 px-1 w-full lg:my-4 lg:px-4 rounded-lg shadow-lg justify-between leading-tight p-2 md:p-4" id="itemCard">
          <img
            src={`/assets/${item.image}`}
            className="box-content h-32 w-32 p-4 border-1"
            alt=""
          />
          <div>
            <div>{item.name}, ${item.price}</div>
            <div>
              <span>Qty:</span>
              <input
                type="number"
                placeholder="1"
                value={item.purchaseQuantity}
                onChange={onChange}
              />
              <span
                role="img"
                aria-label="trash"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;