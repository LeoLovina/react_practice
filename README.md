# Install 
* install nodejs
* npm install -g create-react-app
    * create-react-app my-app
    * create-react-app my-app --scripts-version=react-scripts-ts
# React Component
* 實作 render()
* Input: 透過 this.props 取得輸入的參數
* Output: 顯示的畫面, 其使用 XML-like 的語法, 稱之為 JSX

# chrome-debug
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
