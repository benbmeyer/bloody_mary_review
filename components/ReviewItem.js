import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ReviewItem = ({ id, location, comment, rating, spice, price }) => (
    <Link  className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{location}</h3>
            <h4 className="list-item__subtitle">{comment}</h4>
        </div>
        <div>
            <h4 className="list-item__data">Rating: {rating}/5</h4>
            <h4 className="list-item__data">Spiciness: {spice}/5</h4>
            <h4 className="list-item__data">Price: {numeral(price / 100).format('$0,0.00')}</h4>
        </div> 
    </Link>
);

export default ReviewItem;