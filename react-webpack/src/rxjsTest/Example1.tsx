import * as React from 'react';
export default class Example1 extends React.Component<any, any> {
    constructor(props:any){
        super(props);
        this.state = { message: '' };
    }
    onClick = (event:any) => {
        this.setState({message: `Get it ${Date.now()}`});
    }
    render(){
        return(
            <div>
                <h1>Example 1</h1>
                <button onClick={this.onClick}>Click me</button>
                <div>{this.state.message}</div>
            </div>
        );
    }
}