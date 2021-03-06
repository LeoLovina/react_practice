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
}