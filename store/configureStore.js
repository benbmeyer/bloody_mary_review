import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import bloodiesReducer from '../reducers/bloodies';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            bloodies: bloodiesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};