import * as React from "react"


interface HelloInterface{
  defaultName: string;
  defaultColor?: 'blue' | 'green' | 'red';
  defaultType?: 'button' | 'submit';
  handleAgeChange(event: any): void;
}

export default class Hello extends React.Component<HelloInterface, any> {

  // set default props value here, otherwise the caller need to provide all fields on HelloInterface
  public static defaultProps = {
    defaultName: "Default Name",
    defaultColor : 'blue',
    defaultType : 'button'
  }
  constructor(props: any){
    super(props);
    console.log(props);
  }

  public render() {

    const divStyle = {
      backgroundColor:  (this.props.defaultColor==null)? '#FFD382' : this.props.defaultColor,
      padding: '10px',
      marginBottom: '5px'
    };
    return (
      <div style={divStyle} >
        Hello {this.props.defaultName} <br/>
        Age: <button name="ageText" onClick={e=>this.props.handleAgeChange(e)} type={this.props.defaultType} value="0"> Reset Age</button>
      </div>
    );
  }
}

