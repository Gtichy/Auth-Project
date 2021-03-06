import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../Constants/Routes.js';

class Navigation extends Component {
    render(){
        return (
            <div>
            <ul>
              <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
              </li>
              <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
              </li>
              <li>
                <Link to={ROUTES.HOME}>Home</Link>
              </li>
              <li>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
              </li>
              <li>
                <Link to={ROUTES.ADMIN}>Admin</Link>
              </li>
            </ul>
          </div>
        
        )
    }
}

export default Navigation;