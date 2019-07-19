import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import ReviewFilters from './ReviewFilters';
import UserRecentReviews from './UserRecentReviews';

const BM3HomePage = () => (
    <div className='background-in'>
        <ReviewFilters />
        <UserRecentReviews />
    </div>
);

export default BM3HomePage;