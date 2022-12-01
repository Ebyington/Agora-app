import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_HISTORY } from '../utils/mutations';
import { fullPromise } from '../utils/helpers';

function CompletedOrder() {
  const [addHistory] = useMutation(ADD_HISTORY);

  useEffect(() => {
    async function saveOrder() {
      const cart = await fullPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addHistory({ variables: { products } });
        const productData = data.addHistory.products;

        productData.forEach((item) => {
          fullPromise('cart', 'delete', item);
        });
      }

    }

    saveOrder();
  }, [addHistory]);

  return (
    <div>

        <h1>Oof...you bought it...Thanks!</h1>
   
    </div>
  );
}

export default CompletedOrder;