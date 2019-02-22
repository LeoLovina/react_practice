import * as React from 'react'
import {Observable, fromEvent, of, from } from 'rxjs';
import {map, scan, merge, mergeMap, flatMap, mapTo, takeUntil} from 'rxjs/operators';
import ApiTest from './ApiTest';
import Example from './Example';

export default class RxjsTest extends React.Component<any ,any> {
    constructor(props: any){
        super(props);
        this.state = {            
            clickCount:0
        };
    }    

    componentDidMount(){
        this.onSetEvent();
    }

    onDraw = (canvas: HTMLCanvasElement, evt:MouseEvent)=> {
        // Note:
        // game is a html canvas element
      //  var canvas: HTMLCanvasElement =  document.getElementById('game') as HTMLCanvasElement;
        if(canvas.getContext) {
            var context = canvas.getContext("2d");

            // convert position relative to the element itself.
            const rect = canvas.getBoundingClientRect();
            const posX = evt.clientX - rect.left;
            const posY =  evt.clientY - rect.top;
            context.fillRect(posX, posY, 14, 14);
        }
    }

    onSetEvent = () => {
        const canvas: HTMLCanvasElement =  document.getElementById('game') as HTMLCanvasElement;

        // fromEvent(canvas, "mousedown")
        //     .pipe(mergeMap(md=>fromEvent(canvas,"mousemove").pipe(map(mm=>md.type + mm.type )) ))
        //     .subscribe((e)=>{
        //         console.log(e);
        //     });

        // fromEvent(canvas, "mousedown")
        //     .pipe(mergeMap(e=>fromEvent(canvas,"mousemove")))
        //     .pipe(takeUntil(fromEvent(canvas,"mouseup")))
        //     .subscribe((e:MouseEvent)=>{
        //         console.log(e);
        //         this.onDraw(canvas, e);
        //     });

        fromEvent(canvas, "mousedown")
            .pipe(mergeMap(e=>fromEvent(canvas,"mousemove")
                .pipe(takeUntil(fromEvent(canvas,"mouseup")))   // stop mousemove(observable)
            ))            
            .subscribe((e:MouseEvent)=>{
                console.log(e);
                this.onDraw(canvas, e);
            });

 
        const btnInc = document.querySelector('#btnInc');
        const btnDec = document.querySelector('#btnDec');

        const btnDecObservable = fromEvent(btnDec, 'click')
                .pipe(map(e=>-2));
        const btnIncObservable = fromEvent(btnInc, 'click')
                .pipe(map(e=>1));

                btnDecObservable.subscribe((value:any)=>{
                    console.log(value);
                }) ;  

        // merge(btnDecObservable, btnIncObservable)
        //     .pipe(scan((acc, value)=> acc+value))
        //     .subscribe((value:any)=>{
        //         console.log('subscribe:' + value);
        //         // const total = this.state.clickCount + value ;
        //         // console.log('total:' + total);
        //         // this.setState({clickCount: total});
        //     });

        // fromEvent(window,'click')
        // .pipe(map((e:any)=>1))
        // .pipe(scan((acc:any, val: any)=> 
        //     acc+ val
        // ))
        // .subscribe((value:any)=> {
        //     console.log('count:' + value);
        // });
    }

    onRxjsTest = (event: any) => {

        const letterObservable = of('a', 'b', 'c', 'd');
        const numberObservable = of('1', '2', '3');
        const windowObservable = fromEvent(window, 'click');

        // const result = letterObservable.pipe(mergeMap(
        //     x=> windowObservable.pipe(map(i=>x+i))
        // )); 

        // const result = letterObservable.pipe(mergeMap(
        //     x=> numberObservable.pipe(map(i=>x+i))
        // )); 

        // const result = letterObservable.pipe(merge(
        //      numberObservable
        // )); 

        const result = letterObservable.pipe(flatMap( x=>
            numberObservable
        )); 

        result.subscribe(x=>{
            console.log(x);
            // x.subscribe(y=>{
            //     console.log(y);
            // });
        });

        // merge(letterObservable, windowObservable)
        //     .subscribe(x=>{
        //         console.log(x); 
        //     });
        // letterObservable.subscribe(v=>{
        //     console.log(v);
        // });


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
        const canvasStyle = {border:'1px solid #000000'};
        return (
            <div> 
                <h1>RXJS Test</h1>
                <Example></Example>

                <button id='btnTest' onClick={e=>this.onRxjsTest(e)}>Rxjs Test</button>

                click count : <div> {this.state.clickCount} </div>
                <button id='btnInc'>+</button> <button id='btnDec'>-</button> 

                <canvas id="game" width="640" height="480" style={canvasStyle}></canvas>
                <ApiTest></ApiTest>
            </div> 
            )     
    }
}
