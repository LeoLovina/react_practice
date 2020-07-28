# 什麼是React 
React是一個 JavaScript library, 並專注在 View Layer, 利用建置元件(component), 來完成面畫(UI).當我們建立一個 React app 時, 我們可以想像我們會建立一個或多個 React component, 每一個 component 彼此可以相互溝通, 利用這些 component 完成我們的 UI.
一個 React component 是一個簡單的 Javascript class, 在這個 class 中需要定義 render function, 而 render function 說明是用來輸出 HTML code. 
React component 可以進一步區分為 containers/stateful component 及 stateless component

React 使用 Virtual DOM 來處理頁面渲染(page rendering), 而不是直接操作 HTML DOM. React 會週期地比較 Virtual DOM 與 HTML DOM, 計算他們的差異, 再進行頁面渲染. 

# 開始 
* 安裝 node 環境
    - 請參考 https://nodejs.org/en/download/package-manager/ 
    - 安裝完成之後, 你可以利用雨到命令檢檢查核檢查
    > node --version
    
    > npm --version
    

npm install -g create-react-app
* create-react-app my-app
    * create-react-app my-app --scripts-version=react-scripts-ts
* typescript version 
    * npx create-react-app app_name --typescript
# React Component
* 實作 render()
* Input: 透過 this.props 取得輸入的參數
* Output: 顯示的畫面, 其使用 XML-like 的語法, 稱之為 JSX

* 直接在瀏灠器進行除錯
* 安裝 Debugger for Chrome
* 使用 npm run start 啟動 react 內建的 development web server, http://localhost:3000/
* 執行  F5, vs code 會在 .vs 建立 launch.json
* 講確定 `  "url": "http://localhost:3000`" `
    
# error
### Import sources within a group must be alphabetized
表示 import 時, 需要依據 英文 順序排列, 例如:
```
import HelloMessage from './myApp';
import App from './App';
```
就會產生此錯誤, 若改成
```
import App from './App';
import HelloMessage from './myApp';
```
就可以了, 若是覺得麻煩, 可以在 tslint.json 依如下之設定
```
  "rules": {
   "ordered-imports": [false],
    "object-literal-sort-keys": [false]
  }
```


# How to edit Markdown
https://github.com/neilsustc/vscode-markdown/blob/master/README.md
