# component 生命週期
參考 [react-lifecycle-methods-diagram](0http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
# Promise
ES5 其有包含 Promise. 而如 jQuery 或是 Angular 則是自己實作自己的 Promisee. 在 ES5 中比較有名的 Promise 程式庫是 `Bluebird`
## 基本語法
```js
    let promise = new Promise(function(resolve, reject){
        let result = {
            name: 'Leo',
            age: 100
        }
        resolve(result);    // if success
    //  reject("failed");   // if failed
    });
    promise.then(function(result){
        console.log(result);
    }, function(reason){
        console.log(reason);
    }).catch((error)=>{
        console.log(error);
    });
```
當在 `Promise`中執行 resolve, 表示此 `Promise`執行成功, 若是執行 `reject`, 表示執行失敗, 下面範例則是說明如何處理
利用 Promise 可以用來處理 async 時的同步問題, 如下列範例 `do something` 完成之後, 才會呼叫 `success` 或 `fail`
```js
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("do something");
            resolve("done");
        }, 3000);
    });
    promise.then(function(result){
        console.log("execute success: " + result);
    }, function(reason){
        console.log("execute failed: " + reason);
    })
    .catch((error)=>{
        console.log(error);
    });

```
# Fectch
- 將取代 XMLHttpRequest 
- fetch 會使用 ES6 的 Promise 作回應
    - then 作為下一步
    - catch 作為錯誤回應 (404, 500…)

基本語法
```js
    fetch("https://sheetsu.com/apis/v1.0/020b2c0f")
        .then(function(response){
            console.log(response);
            let json = response.json();
            if (response.status ==200){
                return json;
            }
            else {
                return json.then(Promise.reject.bind(Promise))  
            }
        })
        .then
        (
            (result) => {
                this.setState({
                    isLoaded: true,
                    externalData: result
                })
            },
            (reason)=>{
                this.setState({
                    isLoaded: true,
                    error: reason.error
                })
            }
        )
```

# Axios 
- 原生XHR的封裝。它有以下幾大特性：
    - 可以在node.js中使用
    - 支援 Promise API
    - 支援 CSRF (cross site request forgery)
    - 支援  intercept and cancel requests
Axios is promise-based and thus we can take advantage of async and await for more readable asynchronous code. 

## 基本語法
```js
    Axios.get(url)
    .then((response)=>{
        console.log(response);
        if (response.status === 200){
        }
        else {
        }
    })
    .catch(error => {
        console.log(error);
    });
```

若是採用 async/await
```js
   async getExternalDataAwait(){
        const response = await Axios.get("https://sheetsu.com/apis/v1.0su/ea9eca9561fb")
            .catch(reason=>{
                console.log (reason);
                this.setState({
                    isLoaded: true,
                    error: reason.response.data.error
                });
            });
        console.log (response);
        // I don't why here ....If response is not assigned to another variable, TypeScript always return an error.
        const result = response as any;
        if (result != 'undefined'){
            if (result.status === 200){
                this.setState({
                    isLoaded: true,
                    data: result.data
                });
            }
        }
    }
```

# 注意事項
- 當呼叫 method 時, 若有指定 call back function, 必須使用 arrow function, 否則 `this` 會是 `undefined`, 如下範例:

```js
    let apiUtil: ApiUtil = new ApiUtil();
    apiUtil.getData("https://sheetsu.com/apis/v1.0su/ea9eca9561fb", 
        (result:ApiResult.ApiResult) =>{
            console.log(result);
            this.setState({
                            error: result.error,
                            isLoaded: true,
                            data: result.data
                        })
        }
    );
```
- 警告訊息
如果 import 時名師大小寫不一致, 會產生問題, 例如 `import Axios from 'Axios'` 及 `import Axios from 'axios'`
```
WARNING in ./node_modules/Axios/lib/utils.js
There are multiple modules with names that only differ in casing.
This can lead to unexpected behavior when compiling on a filesystem with other case-semantic
```
- 警告訊息
當指定一個 input, 且設定了 value 是來自 state, 若 沒有設定 onChange, 就會出現下列警告訊息
Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. 
```js
<input type="text" name="searchKey" value={this.state.searchKey} /> 
```
# CSS
1. In order to import a CSS file from within a JavaScript module, you need to install and add the style-loader and css-loader 
npm install --save-dev style-loader css-loader
2. when a css is packed, we can use these css on all html files
> import '../../css/style.css';


# free rest API
- Google Spreadsheet.
Have a look at Sheetsu in this link:  https://sheetsu.com/
- https://jsonplaceholder.typicode.com/

