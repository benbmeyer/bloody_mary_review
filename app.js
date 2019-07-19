import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './router/AppRouter';
import configureStore from './store/configureStore';
import { startSetBloodies } from './actions/bloodies';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true; 
    }
};

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetBloodies()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/home');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/')
    }
});