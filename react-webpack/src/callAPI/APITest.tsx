import * as React from 'react'
import Axios from 'axios'
import ApiUtil from './ApiUtil'
import * as ApiResult from './ApiResult'

export default class APITest extends React.Component<any ,ApiResult.ApiResult> {
    constructor(props: any){
        super(props)
        console.log('constructor');
    }    

    componentDidMount(){
        this.setState({
            isLoaded: false
        })
        this.getExternalDataAwait();
//        this.getExternalData();
    }

    async getExternalDataAwait(){
        let apiUtil: ApiUtil = new ApiUtil();
        apiUtil.getDataAsync("https://sheetsu.com/apis/v1.0su/ea9eca9561fb", 
            (result:ApiResult.ApiResult) =>{
                console.log(result);
                this.setState({
                                error: result.error,
                                isLoaded: true,
                                data: result.data
                            })
            }
        );
    }

    getExternalData = () =>{
        // need to use Arrow function as a call back function, or 'this' will be 'undefined'
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
    }

    render() {
        console.log(this.state);
        let result : any;
        if (this.state==null)
            result = <div>Initializing ...</div>
        else {
            const {error, isLoaded, data} = this.state;
            if (!isLoaded){
                result = <div> Loading ...</div>
            }
            else if (error){
                result =<div>Error : {error} + </div>;
            }
            else {
                result =<ul>
                    {data.map((item:any)=>(
                        <li key={item.id}> <b>{item.name}</b> {item.score}</li>
                    ))}
                </ul>
            }
        }
        return (
            <div> 
                <h1>WEB API Test</h1>
                {result}
            </div> 
            )     
    }
}