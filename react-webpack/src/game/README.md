- 每一個 component 產生 instance 時, 其 constructor 只會被呼叫一次, 所以通常我們會在 constructor 中設定 state, 表示此 state 會被初始化一次. 

# Key Prop
- 警告訊息 `Warning: Each child in an array or iterator should have a unique "key" prop.` 每一個 child component 都要有一個 唯一的 Key
```tsx
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

- 請注意 key 不會透過 props 傳給 child, 簡單來說Key
    - Unique - A key cannot be identical to that of a sibling component.
    - Static - A key should not ever change between renders.

## maybe bad 
如果 rows 是會改變, 如: 新增/刪除/排序, 此時的 key 就會改變
```tsx
<tbody>
    {rows.map((row, i) => {
        return <ObjectRow key={i} />;
    })}
</tbody>
```
最好的做法是有一個uniqueId, uniqueId 是來自資料庫, 能確保 key 是唯一, 且不會改變. 
```tsx
<tbody>
    {rows.map((row) => {
        return <ObjectRow key={row.uniqueId} />;
    })}
</tbody>
```
