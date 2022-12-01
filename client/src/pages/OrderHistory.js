import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(GET_USERS);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        {user ? (
          <>
          <div>
            <h2>
              THANKS FOR PURCHASING THE BEST IN CLOTHING  {user.firstName} {user.lastName}
            </h2>
            {user.histories.map((item) => (
              <div key={item._id} className="my-2">
                <h3>
                  {new Date(parseInt(item.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {item.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/assets/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
