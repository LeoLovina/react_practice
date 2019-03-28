import * as React from 'react';
import {fromEvent, Observable, of} from 'rxjs';
import {mapTo} from 'rxjs/operators';

export default class Example5 extends React.Component<any, any>{
    componentDidMount(){
        this.onSetEvent();
    }
    onSetEvent = () => {    
        const clickObservable = fromEvent(document.getElementById('btn5'),'click');
        const letterObservable = of('a', 'b', 'c', 'd');
        const result = clickObservable.pipe(mapTo(
            letterObservable
        )); 
    
        result.subscribe(x=>{
            console.log(x);
            // x.subscribe(y=>{
            //     console.log(y);
            // });
        });
    }
    render(){
        return(
            <div>
                <h1>Example 5 - mapTo</h1>
                <button id='btn5'>Click me</button>
            </div>
        );
    }
}