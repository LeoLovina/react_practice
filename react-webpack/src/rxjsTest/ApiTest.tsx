import * as React from 'react'
import Axios from 'axios'
import {Observable, fromEvent, from} from 'rxjs';
import {map, scan, merge, mergeMap, flatMap, mapTo, takeUntil} from 'rxjs/operators';

export default class ApiTest extends React.Component<any ,any> {
    constructor(props: any){
        super(props);
        this.state = {'jsonResult': '<nothing>'};
    }    

    componentDidMount(){
        this.onRegisterEvent();
    }

    onRegisterEvent = () =>{
        const btn = document.getElementById('btnGet');

        // Case 1 
        // fromEvent(btn,'click').subscribe(e=>{
        //     Axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then(e=>{
        //         console.log(e);
        //          this.setState({"jsonResult": JSON.stringify(e)})
        //     });
        // });

        fromEvent(btn,'click')
            .pipe(mergeMap(e=> from(
                Axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then(e=> e.data )
                )))
            .subscribe(e=>{
                console.log(e);
                this.setState({"jsonResult": JSON.stringify(e)})
                });


        // Case 2
        // fromEvent(btn,'click')
        //     .pipe(mergeMap(e=> from(this.onSendRequest(e))))
        //     .subscribe(e=>{
        //         console.log(e);
        //         this.setState({"jsonResult": JSON.stringify(e)})
        //         });


        // Case 3
        // const observable = Observable.create( ( observer: any ) => {
        //     Axios.get( 'https://my-json-server.typicode.com/typicode/demo/posts' )
        //     .then( ( response ) => {
        //         observer.next( response.data );
        //         observer.complete();
        //     } )
        //     .catch( ( error ) => {
        //         observer.error( error );
        //     } );
        // } );
        

        // const observer = {
        //     next: (x:any) => {
        //         console.log('got value ' + x);
        //         this.setState({"jsonResult": JSON.stringify(x)})
        //         },
        //     error: (err:any) => console.error('something wrong occurred: ' + err),
        //     complete: () => console.log('done'),
        // };

        // const subscription = fromEvent(btn,'click').pipe(mergeMap(e=> observable))
        //         .subscribe(observer);

    }

    onSendRequest =(e:any) => {
        return Axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then(e=> e.data );
    }

    render(){
        const hello = 'hello';
        return (
            <div> 
                <h1>RXJS Axios API Test</h1>
                <button id='btnGet'> Get Data from API </button>
                <div>
                    {this.state.jsonResult}
                </div>
            </div>
        )
    }
}
