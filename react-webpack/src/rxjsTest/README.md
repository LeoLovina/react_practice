# install rxjs on ES5

> npm install rxjs 
目前最新版本 RXJS 6, 其可以用於 ES6, 若是要用 ES5, 需要在 tsconfig.json 中加入

>  "lib": ["es2015", "dom"]


# 範例
## case 1
在 btn 分別建立兩個 Observable, 設定 click 時產生 -2 及 1, 再利用 merge 將兩個 Observable 合併
``` javascript
        const btn = document.querySelector('#btn');

        const btnDecObservable = fromEvent(btn, 'click')
                .pipe(map(e=>-2));
        const btnIncObservable = fromEvent(btn, 'click')
                .pipe(map(e=>1));

        merge(btnDecObservable, btnIncObservable)
            .subscribe((value:any)=>{
                const total = this.state.clickCount + value ;
                console.log('total:' + total);
            });
```
## case 2
利用 scan 做資料的累計
``` javascript
        const btnInc = document.querySelector('#btnInc');
        const btnDec = document.querySelector('#btnDec');

        const btnDecObservable = fromEvent(btnDec, 'click')
                .pipe(map(e=>-2));
        const btnIncObservable = fromEvent(btnDec, 'click')
                .pipe(map(e=>1));

        merge(btnDecObservable, btnIncObservable)
            .pipe(scan((acc, value)=> acc+value))
            .subscribe((value:any)=>{
                console.log('subscribe:' + value);
            });
```
## case 3
```javascript
    const letterObservable = of('a', 'b', 'c');
    const numberObservable = of('1', '2', '3');
    const result = letterObservable.pipe(merge(
            numberObservable
    )); 

    result.subscribe(x=>{
        console.log(x)
    });
```
輸出 `a b c 1 2 3`

## Case 4 
flatMap = mergeMap
``` javascript
    const letterObservable = of('a', 'b', 'c');
    const numberObservable = of('1', '2', '3');

    const result = letterObservable.pipe(mergeMap(
        x=> numberObservable.pipe(map(i=>x+i))
    )); 

    result.subscribe(x=>{
        console.log(x)
    });
```
輸出 `a1 a2 a3 b1 b2 b3 c1 c2 c3`

## Case 5

``` javascript
    const letterObservable = of('a', 'b', 'c', 'd');
    const numberObservable = of('1', '2', '3');

    const result = letterObservable.pipe(mapTo(
        numberObservable
    )); 

    result.subscribe(x=>{
        console.log(x);
        x.subscribe(y=>{
            console.log(y);
        });
    });
```
輸出
```
1
2
3
RxjsTest.tsx:69 Observable {_isScalar: false, _subscribe: ƒ}
1
2
3
RxjsTest.tsx:69 Observable {_isScalar: false, _subscribe: ƒ}
1
2
3
RxjsTest.tsx:69 Observable {_isScalar: false, _subscribe: ƒ}
1
2
3
```
## Case 6
當在 canvas 產生 mousedown 及 mousemove 時, 此時會將此 event 合併, 以下面範例而言 `downEvent` 是指 mousedown
```javascript
        const canvas: HTMLCanvasElement =  document.getElementById('game') as HTMLCanvasElement;
        fromEvent(canvas, "mousedown")
            .pipe(mergeMap(downEvent=>fromEvent(canvas,"mousemove")))
            .subscribe(moveEvent=>{
                console.log(moveEvent);
            });
```
輸出 
MouseEvent {isTrusted: true, screenX: 200, screenY: 374, clientX: 200, clientY: 303, …}
MouseEvent {isTrusted: true, screenX: 200, screenY: 376, clientX: 200, clientY: 305, …}
:
:

若我們將範例改成如下, 我們使用 mergeMap 可以同時取得兩個 事件
```javascript
        fromEvent(canvas, "mousedown")
            .pipe(mergeMap(md=>fromEvent(canvas,"mousemove").pipe(map(mm=>md.type + mm.type )) ))
            .subscribe((e)=>{
                console.log(e);
            });

```
輸出 `mousedownmousemove`

## Case 7
當 mousedown 時, 建立 mousemove observable, 直到 mouseup
```javascript
       fromEvent(canvas, "mousedown")
            .pipe(mergeMap(e=>fromEvent(canvas,"mousemove")
                .pipe(takeUntil(fromEvent(canvas,"mouseup")))   // stop mousemove(observable)
            ))            
            .subscribe((e:MouseEvent)=>{
                console.log(e);
                this.onDraw(canvas, e);
            });
```

## 取得 html Canvas 的內部座標
``` javascript
    getMousePos = (canvas: HTMLCanvasElement, evt:MouseEvent) =>{
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
```

## Rxjs 與 Axios 範例
``` javascript
        const btn = document.getElementById('btnGet');
        const observable = Observable.create( ( observer: any ) => {
            Axios.get( 'https://my-json-server.typicode.com/typicode/demo/posts' )
            .then( ( response ) => {
                observer.next( response.data );
                observer.complete();
            } )
            .catch( ( error ) => {
                observer.error( error );
            } );
        } );
        
        const observer = {
            next: (x:any) => {
                console.log('got value ' + x);
                this.setState({"jsonResult": JSON.stringify(x)})
                },
            error: (err:any) => console.error('something wrong occurred: ' + err),
            complete: () => console.log('done'),
        };

        const subscription = fromEvent(btn,'click').pipe(mergeMap(e=> observable))
                .subscribe(observer);
```

# 注意事項
- Scan like reduce, but emits the current accumulation whenever the source emits a value.