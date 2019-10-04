import * as React from 'react';
import { Route, Link } from 'react-router-dom';

const User = ({ match } : any) => <p> {match.parms.id}</p>;

export default class Users extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        console.log(this.props);
        const { params } = this.props.match;
        return (
            <div>
                <h1>User</h1>
                <strong>select a user</strong>
                <p> {params.id} </p>
                <ul>
                    <li>
                        <Link to="/users/1">User 1 </Link>
                    </li>
                    <li>
                        <Link to="/users/2">User 2 </Link>
                    </li>
                    <li>
                        <Link to="/users/3">User 3 </Link>
                    </li>
                </ul>
                <Route path="/users/:id" component={User} />
            </div>
        );
    };
}

