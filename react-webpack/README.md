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
為了避免這種不問題, 可以利用 arrow function, 如下範例

範例二

    public handleOnAgeChange = (event : any) => {
         this.setState({age: event.target.value});
     }

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

# 注意事項
- All DOM properties and attributes (including event handlers) should be camelCased to be consistent with standard JavaScript style
- React 中的 state 有點像是 component 中的 local variable，它是由 component 自己本身來維護它的值
- React 中的 props 是唯讀, 不可以被再設定值, 當 props 在 component 中被設定成 any, 此時表示在 caller 中, 可以任意指定參數, 並不會有型態的檢查
- 當在 component 中加入 input 時, 若是沒有設定 onChange, 此時需要指定此 input 為 readonly
- 當一個 event 被 trigger 時, 更新的 state, 而 state 的變化進而要求 component 重新 render 
- Unidirectional Data Flow  ==> event > evrnt handler > state > render
- 當我們需要 function 傳給 sub component 時, 需要執行 **this.handler.bind(this)** 重新 bind(this), 不然 this 會形成 undefined. 另一種方式是用 arrow function 
- interface 是 TypeScrpt 的宣告, 可以在 compile 階段檢查呼叫 Component時, 是否有提供正確的參數
 
  


