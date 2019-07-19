import React from 'react';
import { connect } from 'react-redux';
import ReviewItem from './ReviewItem';
import selectBloodies from '../selectors/bloodies';

export const UserRecentReviews = (props) => (
    <div className="content-container1">
        <div className="list-header">
            <div>Bloody Mary</div>
            <div>Details</div>
            </div>
        <div className="list-body">
            {
                props.bloodies.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span className="list-item--message">No Reviews</span>
                    </div>
                ) : (
                    props.bloodies.map((bloody) => {
                        return <ReviewItem key={bloody.id} {...bloody}/>;
                })
            )
        }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        bloodies: selectBloodies(state.bloodies, state.filters)
    };
};
export default connect(mapStateToProps)(UserRecentReviews);