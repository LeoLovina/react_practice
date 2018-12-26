# React Without JSX
當使用 React 時, 可以選擇不使用 JSX, 但是程式碼會變得很繁雜, 每一個 JSX element 都是一個 syntactic suger, 它會自動呼叫 
```
 React.createElement(component, props, ...children)
```

# React.render()
React.render( react component, DOM element)