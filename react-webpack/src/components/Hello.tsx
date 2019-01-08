import * as React from "react"


interface HelloInterface{
  defaultName: string;
}

export default class Hello extends React.Component<HelloInterface, any> {
  public static defaultProps = {
    defaultName: "Default Name"
  }
  constructor(props: any){
    super(props);
   // this.state = {name: this.props.defaultName};
  }
  greeting: string = "Hello Leo";

  public render() {
    const divStyle = {
      backgroundColor: '#FFD382',
      padding: '10px',
      marginBottom: '5px'
    };
    return (
      <div style={divStyle} >
        {this.greeting}
        Hello {this.props.defaultName}
       
      </div>
    );
  }
}

