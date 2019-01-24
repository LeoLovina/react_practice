# component 生命週期
參考 [react-lifecycle-methods-diagram](0http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
# 基本 Promise 語法
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

# free rest API
Google Spreadsheet.
Have a look at Sheetsu in this link:  https://sheetsu.com/
