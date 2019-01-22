import * as React from 'react';
import Square from './Square';

export default class Board extends React.Component<any, any> 
{
    constructor(props: any){
        super(props);
        this.state = {
            squares : Array(9).fill('O')
        };
    }

    handleClick = (event: any, i : any, n:any) => {
        console.log(i);
        const squares = this.state.squares;
      //  const squares = this.state.squares.slice();
        squares[i] = squares[i] == 'X'? 'O' : 'X';
        this.setState({squares: squares});
    };

    renderSquare(i: number){
        return <Square squareNumber={this.state.squares[i]} 
                        onClickHandler={(e:any) => this.handleClick(e, i, 'b')}>
            </Square>
    }

    render(){
        return (
            <div>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
            </div>
        );
    }
}
