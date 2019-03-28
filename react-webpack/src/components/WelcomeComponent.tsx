import * as React from "react"
import Hello from './Hello'

class Welcome extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        console.log(props);
        this.state = {name: this.props.defaultName,
            age: this.props.defaultAge
        };
      //  this.handleOnAgeChange = this.handleOnAgeChange.bind(this);
    }

    public handleOnBtnClick(event: any): void {
        this.setState({name: "One Piece"});
    }

    public handleOnNameChange(event: any): void {
        this.setState({name: event.target.value});
    }

    // public handleOnAgeChange(event : any): void {
    //     this.setState({age: event.target.value});
    // }
    public handleOnAgeChange = (event : any) => {
         this.setState({age: event.target.value});
     }

    render() {
        console.log('Welcome render');
        return (
            <div>
                <Hello handleAgeChange = {this.handleOnAgeChange} defaultColor='green'/>
                <button name="Update" onClick= {e=> this.handleOnBtnClick(e)}  value="Update"> Update</button>
                <input name="nameText" onChange = {e=> this.handleOnNameChange(e)} />
                <input name="ageText" onChange = {e=> this.handleOnAgeChange(e)} />
                <h5> defaultName: {this.state.name} </h5>
                <h5> defaultAge: {this.state.age} </h5>
            </div>
        )
    }
}

export default Welcome;

