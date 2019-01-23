- 每一個 component 產生 instance 時, 其 constructor 只會被呼叫一次, 所以通常我們會在 constructor 中設定 state, 表示此 state 會被初始化一次. 
- 警告訊息 `Warning: Each child in an array or iterator should have a unique "key" prop.` 每一個 child component 都要有一個 唯一的 Key
```
    renderSquareByMap = (item: any, i: number, array: any) =>{
        return <Square key={i} id={i}> </Square>
    }

    render(){
        return (
            <div>
                {this.state.squares.map(this.renderSquareByMap)}
            </div>
        );
    }
``` 
請注意 key 不會透過 props 傳給 child
