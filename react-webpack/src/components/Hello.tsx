import * as React from "react"


interface HelloInterface{
  defaultName: string;
}

export default class Hello extends React.Component<any, any> {

  // set default props value here, otherwise the caller need to provide all fields on HelloInterface
  public static defaultProps = {
    defaultName: "Default Name"
  }
  constructor(props: any){
    super(props);
  }

  public render() {
    console.log('Hello render');

    const divStyle = {
      backgroundColor: '#FFD382',
      padding: '10px',
      marginBottom: '5px'
    };
    return (
      <div style={divStyle} >
        Hello {this.props.defaultName} <br/>
        Age: <input name="ageText" onChange={e=>this.props.handleAgeChange(e)}/>
      </div>
    );
  }
}

