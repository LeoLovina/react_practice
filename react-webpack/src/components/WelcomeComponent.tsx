import * as React from "react"
import Hello from './Hello'

class Welcome extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        console.log(props);
        this.state = {name: this.props.defaultName};
    }

    public handleChange(event: any): void {
        console.log(event);
        this.setState({name: "One Piece"});
    }

    render() {
        return (
            <div>
                {/* <Hello defaultName='World' /> */}
                <Hello defaultName={this.state.name} />
                <button name="Update" onClick= {e=> this.handleChange(e)}  value="Update"> Update</button>
            </div>
        )
    }
}

export default Welcome;

