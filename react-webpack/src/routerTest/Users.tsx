import * as React from 'react';

export default class Users extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        console.log(this.props);
        const {params} =this.props.match;
        return (
            <div>
                <h1>User</h1>
                <p> {params.id} </p>
            </div>
        );
    };
}
