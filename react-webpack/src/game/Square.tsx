import * as React from 'react';

interface SquareInterface {
    squareNumber: string
}

export default class Square extends React.Component<any, any>{
    constructor(props:any){
        super(props);
    }
    render(){
        return (
        // <button onClick={e =>this.props.onClick(e, this.props.squareNumber)}>{this.props.squareNumber}</button>
        <button onClick={() =>this.props.onClickHandler()}>{this.props.squareNumber}</button>
        );
    }
}
