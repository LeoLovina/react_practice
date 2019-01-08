import * as React from "react"
import Hello from './Hello'

class Welcome extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div>
                haha
                <Hello defaultName='World' />
                <h1>Hello, {}
                </h1>
            </div>
        )
    }
}

export default Welcome;

