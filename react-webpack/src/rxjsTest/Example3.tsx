import * as React from 'react';
import {fromEvent} from 'rxjs';

export default class Example3 extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state = { message: '' };
    }
    componentDidMount(){
        this.onSetEvent();
    }
    onSetEvent = () => {
        const btn = document.getElementById('btn3');
        fromEvent(btn,'click')
            .subscribe(e=>{
                console.log(e);
                this.setState({message: `Get it ${Date.now()}`})
            });
    }
    render(){
        return(
            <div>
                <h1>Example 3</h1>
                <button id='btn3'>Click me</button>
                <div>{this.state.message}</div>
            </div>
        );
    }
}