import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <div className="header">
        <div className="content-container2">
            <div className="headercontent">
            <Link className="reviewlink" to="/create">
                <h2>Write a Review</h2>
            </Link>
            <Link className="headertitle" to="/home">
                <h1>Bloody Mary x3</h1>
            </Link>
            <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);