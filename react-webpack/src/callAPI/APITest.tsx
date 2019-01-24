import * as React from 'react'

interface interfaceUser{
    id: number,
    name: string,
    score: string
}

interface apiData {
    error:  string,
    isLoaded: boolean,
    externalData:  interfaceUser[]
}

export default class APITest extends React.Component<any ,apiData> {
    // state = {
    //     error: '',
    //     isLoaded: false,
    //     externalData: [{
    //         name:'',
    //         age:0,
    //         job:'Engineer'    
    //    }]
    // }
    constructor(props: any){
        super(props)
        console.log('constructor');
    }    

    componentDidMount(){
        this.getExternalData();
        console.log('componentDidMount');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    // Note: 
    // 'fetch' is only available on ES6
    getExternalData(){
        console.log(this.state);
        // fetch("https://sheetsu.com/apis/v1.0su/f1ca9e38c5c")
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
            
    }

    // Note: 
    // 'Promise' is only available on ES6
    promiseTest(){
        let promise = new Promise(function(resolve, reject){
            setTimeout(() => {
                console.log("Promise after 3 seconds");
                let result = {
                    name: 'Leo',
                    age: 100
                }
                resolve(result);
            }, 3000);
        });
        promise.then(function(result){
            console.log("Promise execute success : " + result);
        }, function(reason){
            console.log("Promise execute failed : " + reason);
        })
        .catch((error)=>{
            console.log(error);
        });

        console.log("Promise execute after timeout");
    }

    render() {
        console.log(this.state);
        let result : any;
        if (this.state==null)
            result = <div>Initializing ...</div>
        else {
            const {error, isLoaded, externalData} = this.state;
            if (!isLoaded){
                result = <div> Loading ...</div>
            }
            else if (error){
                result =<div>Error : {error} + </div>;
            }
            else {
                result =<ul>
                    {externalData.map(item=>(
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