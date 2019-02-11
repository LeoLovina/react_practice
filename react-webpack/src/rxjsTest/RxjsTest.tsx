import * as React from 'react'
import {Observable, fromEvent} from 'rxjs';

export default class RxjsTest extends React.Component<any ,any> {
    constructor(props: any){
        super(props);
    }    

    componentDidMount(){
        this.onSetEvent();
    }

    onSetEvent = () => {
        const btnTest = document.getElementById('btnTest');
        fromEvent(btnTest, 'click').subscribe(()=>{
            console.log('btnTest Click');
        });
    }

    onRxjsTest = (event: any) => {
        const observable = Observable.create(function (observer:any) {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            setTimeout(() => {
              observer.next(4);
              observer.complete();
            }, 1000);
        });
           

        console.log('just before subscribe');
        observable.subscribe({
            next: (x:any) => console.log('got value ' + x),
            error: (err:any) => console.error('something wrong occurred: ' + err),
            complete: () => console.log('done'),
        });

        console.log('just after subscribe');
        
        const source = [1, 5, 9, 3, 'hi', 'tb', 456, '11', 'yoyoyo'];
  
        let total = source
          .map((x:any) => parseInt(x, 10))
          .filter((x:any) => !isNaN(x))
          .map((x:any) => x * 2)
          .reduce((total, value) => total + value )
          console.log(total);

    }

    render() {
        console.log(this.state);
        return (
            <div> 
                <h1>RXJS Test</h1>

                <button id='btnTest' onClick={e=>this.onRxjsTest(e)}>Rxjs Test</button>
            </div> 
            )     
    }
}
