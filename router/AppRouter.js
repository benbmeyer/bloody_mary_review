import React from 'react';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import createHistory from 'history/createBrowserHistory';
import LogInPage from '../components/LogInPage';
import BM3HomePage from '../components/BM3HomePage';
import WriteAReviewPage from '../components/WriteAReviewPage';
import EditReviewPage from '../components/EditReviewPage';
import UserPage from '../components/UserPage';
import LocationPage from '../components/LocationPage';


export const history = createHistory();

//router
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LogInPage} exact={true}/>
                <PrivateRoute path="/home" component={BM3HomePage} />
                <PrivateRoute path="/create" component={WriteAReviewPage} />
                <PrivateRoute path="/edit/:id" component={EditReviewPage} />
                <PrivateRoute path="/user" component={UserPage} />
                <PrivateRoute path="/location/:id" component={LocationPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;