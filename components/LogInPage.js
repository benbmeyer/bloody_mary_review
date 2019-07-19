import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LogInPage = ({ startLogin }) => (
    <div className="background">
        <div className="logincontainer">
            <h1  className="title">Bloody Mary x3</h1>
            <p className="subtitle">The <strong>only</strong> Bloody Mary Review site.</p>
            <button className="button-login" onClick={startLogin}>Log In With <strong>Google</strong></button>   
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LogInPage);