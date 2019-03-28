import * as React from 'react';
import {fromEvent} from 'rxjs';

export default class Example2 extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state = { message: '' };
    }
    componentDidMount(){
        this.onSetEvent();
    }
    onSetEvent = () => {
        const btn = document.getElementById('btn2');
        const observable = fromEvent(btn, 'click');
        const observer = {
            next: (x:any) => { console.log(x); this.setState({message: `Get it ${Date.now()}`}); },
            error: (err:any) => console.error('something wrong occurred: ' + err),
            complete: () => console.log('done'),
        };
        const subscription = observable.subscribe(observer);
    }
    render(){
        return(
            <div>
                <h1>Example 2</h1>
                <button id='btn2'>Click me</button>
                <div>{this.state.message}</div>
            </div>
        );
    }
}