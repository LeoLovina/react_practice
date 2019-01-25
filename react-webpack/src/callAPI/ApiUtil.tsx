import Axios from 'axios'
import * as Result from './ApiResult'


// axios is available on ES5
// 
// Make XMLHttpRequests from the browser
// Make http requests from node.js
// Supports the Promise API
// Intercept request and response
// Transform request and response data
// Cancel requests
// Automatic transforms for JSON data
// Client side support for protecting against XSRF
export default class ApiUtil {

    public getData(url: string, callBack: any ){
        Axios.get(url)
        .then((response)=>{
            console.log(response);
            let apiResult: Result.ApiResult = new  Result.ApiResult();
            if (response.status === 200){
                const item = response.data;
                apiResult.data = item;
            }
            else {
                const item = response.data;
                apiResult.error = item;
            }
            if (callBack != null){
                callBack(apiResult);
            }
        })
        .catch(error => {
            console.log(error);
            let apiResult = {
                error: error.response.data.error
            }
            if (callBack != null){
                callBack(apiResult);
            }
        });
    }

    // async/ await only work on ES6
    async getDataAsync(url: string, callBack: any){
        const response = await Axios.get(url)
            .catch(reason=>{
                console.log (reason);
                let apiResult = {
                    error: reason.response.data.error
                }
                if (callBack != null){
                    callBack(apiResult);
                }
            });
        console.log (response);
        const result = response as any;
        if (result != 'undefined'){
            let apiResult: Result.ApiResult = new  Result.ApiResult();
            if (result.status === 200){
                const item = result.data;
                apiResult.data = item;
            }
            else {
                const item = result.data;
                apiResult.error = item;
            }
            if (callBack != null){
                callBack(apiResult);
            }
        }
    }
}