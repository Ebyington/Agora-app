import React from 'react';
import { useQuery } from "@appolo@client";
import { GET_PRODUCTS} from '../utils/queries';

const ReviewList = () => {
  const {data} = useQuery(GET_PRODUCTS);
    let product;
    if (data) {
      product = data.product
    }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Reviews
      </h3>
      <div className="flex-row my-4">
        {reviews &&
          reviews.map((review) => (
            <div key={review._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {review.reviewAuthor} reviewed{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {review.createdAt}
                  </span>
                </h5>
                <p className="card-body">{review.reviewText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ReviewList;
