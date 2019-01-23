# 步驟
* 初始化, 建立 package.json
> npm init
* 安裝 webpack, Webpack 是一個工具, 可以用來將 JS code 及其相依的 resource, 放到單一的 js 中.
> npm install -g webpack

> npm install --save-dev webpack-cli 
你可以利用 npx webpack-cli init 來初始化 

* 加入 React 及 React-DOM
> npm install --save react react-dom @types/react @types/react-dom

> npm install --save-dev typescript awesome-typescript-loader source-map-loader
* typescript 會依據 tsconfig.json 的設定, 來進行 compile.

# 如何傳送 parameter 
1. 直接使用
- **component** 
```
export default class HelloWorld extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = { name: this.props.defaultName };
    }
```

- **Caller Component**
```
<div>
  <HelloWorld defaultName='World' />
</div>
```
2. 定義 interface
若使用 ingterface 則可以強迫 compile 時候型態的檢查
- **component** 
```
interface HelloInterface{
  defaultName: string;
}

export default class HelloWorld extends React.Component<HelloInterface, {}> {
  constructor(props: HelloInterface){
    super(props);
  }
```
- **Caller Component**
```
<div>
  <HelloWorld defaultName='World' />
</div>
```
# 限定可以輸入的值
在 Interface中, 我們可以限定可以輸入的值, 例如底下範例:
```
interface HelloInterface{
  defaultName: string;
  defaultColor?: 'blue' | 'green' | 'red';
  defaultType?: 'button' | 'submit';
  handleAgeChange(event: any): void;
}
```
# 使用 Arrow function 
範例一
```
    constructor(props: any) {
        super(props);
        this.handleOnAgeChange = this.handleOnAgeChange.bind(this);
    }

    public handleOnAgeChange(event : any): void {
        this.setState({age: event.target.value});
    }   

  render() {
        return (
            <div>
                <Hello handleAgeChange = {this.handleOnAgeChange} defaultColor='green'/>
            </div>
        )
    }     
```
在上範例中, 若是沒有設定
> `this.handleOnAgeChange = this.handleOnAgeChange.bind(this);` 

執行時 Hello 呼叫 `handleAgeChange` 會出現錯誤 
> `Uncaught TypeError: this.setState is not a function`
為了避免這種問題, 可以利用 arrow function, 如下範例

範例二
```
    public handleOnAgeChange = (event : any) => {
         this.setState({age: event.target.value});
     }

```
以上範例中 TypeScript 編譯之後, 會在 constructor 中產生如下的程式碼
```
 this.handleOnAgeChange = (event) => {
            this.setState({ age: event.target.value });
        };
```


# State
在component的 constructor 設定state初始值
要改變state，必須使用setState()
```
 class Welcome extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {name: this.props.defaultName};
    }

    public handleChange(event: any): void {
        this.setState({name: "One Piece"});
    }
```
# Stateless Functional Component
- 在一些情形下, 因為 Functional Component 是沒有狀態, 所以有可能產生 performance issues
- 基本的 functional component 如下
```
function Welcome(props) {
 return <h1>Hello, {props.name}</h1>;
}
```
但是在 TypeScript 中, 不太能直接使用
- 目前新版的 React, 計畫將React.SFC 及 React.StatelessComponent 改為 React.FunctionComponent

# Inline Styles
在 React 中的 inline style, 並不可以用 string 直接來控制, 而是用 JSON object, 其中的 key 需要是 camelCased 的 style name, 而 value 通常是 string
```
  public render() {
    const divStyle = {
      backgroundColor: '#FFD382',
      padding: '10px',
      marginBottom: '5px'
    };
    return (
      <div style={divStyle} >
        {this.greeting}
      </div>
    );
  }
```
# TypeScript compile 成 Javascript 前後比較
## Case 1
- TypeScript 
```
export default class Square extends React.Component<any, any>{
    constructor(props:any){
        super(props);
    }
    render(){
        return (
        <button>{this.props.value}</button>
        );
    }
}
```
- JavaScript
```
class Square extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("button", null, this.props.value)
        );
    }
}
exports.default = Square;
```
在 TypeScript 中, 可以提供型態的檢查, 可是當轉成 JavaScript 之後, 是沒有型態

## Case 2
- TypeScript 
```
interface SquareInterface {
    squareNumber: number
}

export default class Square extends React.Component<SquareInterface, any>{
    constructor(props:SquareInterface){
        super(props);
        this.state = {
            value: props.squareNumber       
        };
    }
    render(){
        return (
             <button>{this.state.value}</button>
        );
    }
}
```
- JavaScript
```
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.squareNumber
        };
    }
    render() {
        return (
        React.createElement("button", null, this.state.value));
    }
}
exports.default = Square;
```
從這個範例中, 我們可以看到 SquareInterface 並沒有實際產生

# 注意事項
- All DOM properties and attributes (including event handlers) should be camelCased to be consistent with standard JavaScript style
- React 中的 state 有點像是 component 中的 local variable，它是由 component 自己本身來維護它的值
- React 中的 props 是唯讀, 不可以被再設定值, 當 props 在 component 中被設定成 any, 此時表示在 caller 中, 可以任意指定參數, 並不會有型態的檢查
- 當在 component 中加入 input 時, 若是沒有設定 onChange, 此時需要指定此 input 為 readonly
- 當一個 event 被 trigger 時, 更新的 state, 而 state 的變化進而要求 component 重新 render 
- Unidirectional Data Flow  ==> event > evrnt handler > state > render
- 當我們需要 function 傳給 sub component 時, 需要執行 **this.handler.bind(this)** 重新 bind(this), 不然 this 會形成 undefined. 另一種方式是用 arrow function 
- interface 是 TypeScrpt 的宣告, 可以在 compile 階段檢查呼叫 Component時, 是否有提供正確的參數
- 在 TypeScript 中, 不需要特別指定 public 或是 private,  public 或是 private 是 TypeScript 在 Compile 時, 模擬出來的效果, 在 runtime 時, 都是可以存取得到, 若要指定一個 property/ function 為 private, 請在 name 前 加上 _ `_someProp`
- 在 render 中, 若是要將 `字串` 與 `變數` 合併, 需要使用
> {"#demo" + this.state.id}

- 操作 array 時, 時常需要使用 `.forEach()`, `.map()`, `.filter()`, 此時需要注意它們走行時的 context 是不同的, 需要使用 bind(this)
> [].forEach( function(){ ..... }.bind( this ) );

一般的 function, 需要指定 .bind(this), 或是先設定`this.mapHandler = this.mapHandler.bind(this);`
```
    mapHandler(item: any, i: number, array: any){
        console.log(this);
    };
    arrayData.map(this.mapHandler.bind(this));
```


Arrow function
```
    mapArrowHandler= (item: any, i: number, array: any) =>{
        console.log(this);
    }
    arrayData.map(this.mapArrowHandler);
```



 
  


