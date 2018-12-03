import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Route 
} from 'react-router-dom';

import Navigation from '../Navigation/Navigation.js';
import LandingPage from '../LandingPage/LandingPage.js';
import SignUpPage from '../SignUpPage/SignUpPage';
import SignInPage from '../SignInPage/SignInPage';
import PasswordForgetPage from '../PasswordForgetPage/PasswordForgetPage';
import HomePage from '../HomePage/HomePage';
import AccountPage from '../AccountPage/AccountPage.js';
import AdminPage from '../AdminPage/AdminPage';

import * as ROUTES from '../../Constants/Routes.js';

class App extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Navigation />
                    <hr />
                    <Route exact path={ROUTES.LANDING} component={LandingPage} />
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                    <Route path={ROUTES.HOME} component={HomePage} />
                    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                    <Route path={ROUTES.ADMIN} component={AdminPage} />
                </div>
            </Router>
        )
    }
}

export default App