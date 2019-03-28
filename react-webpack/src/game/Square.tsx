import * as React from 'react';

interface SquareInterface {
    squareNumber: string
}

export default class Square extends React.Component<any, any>{
    state = {
        id: this.props.id,
        squareNumber : this.props.squareNumber,
        onClickHandler : this.props.onClickHandler
    }
    constructor(props:any){
        super(props);
        console.log('constructor Square');
    }

    render(){
        console.log('Square render'+this.props.id)
        return (
        // <button onClick={e =>this.props.onClick(e, this.props.squareNumber)}>{this.props.squareNumber}</button>
        <button name={'square_'+this.props.id} onClick={() =>this.props.onClickHandler()}>{this.props.squareNumber}  </button>
        // <button name={'square_'+this.state.id} onClick={() =>this.state.onClickHandler()}>{this.state.squareNumber}  </button>
        );
    }
}
