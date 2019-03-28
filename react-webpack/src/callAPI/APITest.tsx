import * as React from 'react'
import Axios from 'axios'
import ApiUtil from './ApiUtil'
import * as ApiResult from './ApiResult'
import Result from './ResultComponent'

export default class APITest extends React.Component<any ,any> {
    constructor(props: any){
        super(props);
        console.log('constructor');
        this.state = {
            searchKey : ''
        }
    }    

    componentDidMount(){
        this.setState({
            searchResult:
            {
                isLoaded: false
            }
        })
       this.getExternalData();
    }

    getExternalData = (event? : any) =>{
        // need to use Arrow function as a call back function, or 'this' will be 'undefined'
        console.log(event);
        let searchKey = this.state.searchKey == ''? '' : '/search?score='+this.state.searchKey;
        let apiUtil: ApiUtil = new ApiUtil();
        apiUtil.getData("https://sheetsu.com/apis/v1.0su/ea9eca9561fb"+searchKey, 
            (result:ApiResult.ApiResult) =>{
                console.log(result);
                this.setState({
                                searchResult:
                                { 
                                    error: result.error,
                                    isLoaded: true,
                                    data: result.data
                                }
                            })
            }
        );
    }

    onFormSubmit = (event: any)=>{
        event.preventDefault();
        // get search key 
        const searchKey = event.target[0].value;
        this.setState({searchKey:searchKey}) 
        this.getExternalData();
    };

    render() {
        console.log(this.state);
        let result : any;
        if (this.state==null || this.state.searchResult==null)
            result = <div>Initializing ...</div>
        else {
            const {error, isLoaded, data} = this.state.searchResult;
            if (!isLoaded){
                result = <div> Loading ...</div>
            }
            else if (error){
                result =<div>Error : {error} + </div>;
            }
            else {
                result = <Result data={data}></Result>
            }
        }
        return (
            <div> 
                <h1>WEB API Test</h1>
                <div>Score: </div>
                <input type="text" name="key" 
                    onChange={(e)=>{ 
                        this.setState({searchKey:e.target.value}) 
                    }} 
                    /> 
                <button onClick={e=>this.getExternalData(e)}>Search</button>

                <form onSubmit={e=>this.onFormSubmit(e)}>
                    <div>Score: </div>
                    <input type="text" name="searchKey" /> 
                    <button type='submit'>Search</button>
                </form>
                {result}
            </div> 
            )     
    }
}