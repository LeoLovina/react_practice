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
1. All DOM properties and attributes (including event handlers) should be camelCased to be consistent with standard JavaScript style


