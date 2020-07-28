import React from 'react';
import { Route, Link } from 'react-router-dom';
import UserDetail from './UserDetail';

export default function User(props) {
    const { url } = props.match
    return (
        <div>
            <h1>Users</h1>
            <strong>select a user</strong>
            <ul>
                <li>
                    <Link to="/user/1">User 1 </Link>
                </li>
                <li>
                    <Link to="/user/2">User 2 </Link>
                </li>
                <li>
                    <Link to="/user/3">User 3 </Link>
                </li>
            </ul>
            {/* <Route path="/user/:id" component={UserDetail} /> */}
        </div>
    );
}
