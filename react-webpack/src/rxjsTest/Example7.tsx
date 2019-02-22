import * as React from 'react';
import {fromEvent} from 'rxjs';
import {mergeMap, takeUntil} from 'rxjs/operators';

export default class Example7 extends React.Component<any, any>{
    componentDidMount(){
        this.onSetEvent();
    }

    onDraw = (canvas: HTMLCanvasElement, evt:MouseEvent)=> {
        // Note:
        // game is a html canvas element
        if(canvas.getContext) {
            var context = canvas.getContext("2d");

            // convert position relative to the element itself.
            const rect = canvas.getBoundingClientRect();
            const posX = evt.clientX - rect.left;
            const posY =  evt.clientY - rect.top;
            context.fillRect(posX, posY, 2, 2);
        }
    }

    onSetEvent = () => {
        const canvas: HTMLCanvasElement =  document.getElementById('myCanvas') as HTMLCanvasElement;
         fromEvent(canvas, "mousedown")
            .pipe(mergeMap(e=>fromEvent(canvas,"mousemove")
                .pipe(takeUntil(fromEvent(canvas,"mouseup")))   // stop mousemove(observable)
            ))            
            .subscribe((e:MouseEvent)=>{
                console.log(e);
                this.onDraw(canvas, e);
            });

    }
    render(){
        const canvasStyle = {border:'1px solid #000000'};
        return(
            <div>
                <h1>Example 7 - Canvas</h1>
                <canvas id="myCanvas" width="300" height="250" style={canvasStyle}></canvas>
            </div>
        );
    }
}