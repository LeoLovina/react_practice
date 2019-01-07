import * as React from "react"
import UserInterface from './UserInterface'

class UserComponent extends React.Component<UserInterface, {}> {
    greeting: string = "Hello Leo";
    
    constructor (props: UserInterface){
        super(props);
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
  
export default UserComponent;