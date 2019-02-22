import * as React from 'react';
import {fromEvent, of} from 'rxjs';
import {mergeMap, mapTo, map} from 'rxjs/operators';

export default class Example6 extends React.Component<any, any>{
    componentDidMount(){
        this.onSetEvent();
    }
    onSetEvent = () => {
        const clickObservable = fromEvent(document.getElementById('btn6'),'click');
        const letterObservable = of('a', 'b', 'c', 'd');
        const result = clickObservable.pipe(mergeMap(e => 
            letterObservable.pipe(map(x=> x + e.type))
        )); 
    
        result.subscribe(x=>{
            console.log(x);
        });
    }
    render(){
        return(
            <div>
                <h1>Example 6 - mergeMap</h1>
                <button id='btn6'>Click me</button>
            </div>
        );
    }
}