import * as React from 'react';
import {fromEvent, of, merge, interval, timer} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export default class Example4 extends React.Component<any, any>{
    componentDidMount(){
        this.onSetEvent();
    }
    onSetEvent = () => {
        const clickObservable = fromEvent(document.getElementById('btn4'),'click');
        const timerObservable = timer(5000);
        // emits sequential numbers every specified interval of time
        const intervalObservable = interval(1000).pipe(takeUntil(timerObservable)); 
        // merge(clickObservable,intervalObservable)
        // .subscribe(e=>{
        //     console.log(e);
        // });
    }
    render(){
        return(
            <div>
                <h1>Example 4 - merge</h1>
                <button id='btn4'>Click me</button>
            </div>
        );
    }
}