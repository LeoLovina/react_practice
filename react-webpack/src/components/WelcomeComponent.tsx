import * as React from "react"
import Hello from './Hello'

class Welcome extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        console.log(props);
        this.state = {name: this.props.defaultName};
    }

    public handleOnBtnClick(event: any): void {
        console.log(event);
        let aa =  this.props.defaultName;
        this.setState({name: "One Piece"});
    }

    public handleOnChange(event: any): void {
        console.log(event);
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <div>
                {/* <Hello defaultName='World' /> */}
                <Hello defaultName={this.state.name} />
                <button name="Update" onClick= {e=> this.handleOnBtnClick(e)}  value="Update"> Update</button>
                <input name="nameText" onChange = {e=> this.handleOnChange(e)} />
                {this.state.name}
                <input name="valueText" value={this.state.name} readOnly/>
            </div>
        )
    }
}

export default Welcome;

