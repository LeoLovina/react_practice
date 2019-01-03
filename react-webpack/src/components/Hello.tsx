import * as React from "react"


class Hello extends React.Component {
    greeting: string = "Hello Leo";
    
    Hello(){
        this.greeting = "Hello World";
        console.log('default constructor');
    }

    public render() {
        // let greeting: string = "Hello Leo";
        return (
        <div>
          {this.greeting}
        </div>
      );
    }
  }
  
  export default Hello;