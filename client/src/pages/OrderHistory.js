import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../utils/queries';
import '../styles/history.css'

function OrderHistory() {
  const { data } = useQuery(GET_USERS);
  let user;

  if (data) {
    user = data.user;
    console.log(user);
  }

  return (
    
    
      <div className="historyContainer">{user ? (     
      <div className='historyCard'>
        
      <div>
        
          {user.histories.map((item) => (
            <div key={item._id} className="itemBox">
         
          <div>
          
        
          </div>
          <div className="flex-row productInfo">
          

            {item.products.map(({ _id, image, name, price }, index) => (

          <div key={index} className="card1">
            <Link to={`/products/${_id}`}>
            <img className='productImg' alt={name} src={`/assets/${image}`} />
              <p className='name1'>{name}</p>
            </Link>
           <div>
              <span className='price1'>${price}</span>
            </div>
          </div>
              ))}
          </div>
          <h2 className='historyTitle'>
          THANKS FOR PURCHASING THE BEST IN CLOTHING {user.fName} {user.lName}
          
          {new Date(parseInt(item.purchaseDate)).toLocaleDateString()}
          </h2>
          </div>
            ))}
            </div>
         </div>
        ) : null}
      </div>     
  );
}

export default OrderHistory;
