import * as React from 'react';
import Square from './Square';

export default class Board extends React.Component<any, any> 
{
    constructor(props: any){
        super(props);
        this.state = {
            squares : Array(9).fill('O')
        };
        // this.renderSquareByMap = this.renderSquareByMap.bind(this);
    }

    handleClick = (event: any, i : any) => {
        console.log(i);
        const squares = this.state.squares;
      //  const squares = this.state.squares.slice();
        squares[i] = squares[i] == 'X'? 'O' : 'X';
        this.setState({squares: squares});
    };

    // 
    renderSquare(item: any, i: number, array: any){
        return <Square squareNumber={this.state.squares[i]} 
                        onClickHandler={(e:any) => this.handleClick(e, i)}>
            </Square>
    }

    // If this is no a arrow function, need to set bind(this) on constructor
    renderSquareByMap = (item: any, i: number, array: any) =>{
        return <Square squareNumber={item} 
                        onClickHandler={(e:any) => this.handleClick(e, i)}>
            </Square>
    }

    render(){
        return (
            <div>
                {this.state.squares.map(this.renderSquareByMap)}
                <br/>
                {this.state.squares.map(this.renderSquare.bind(this))}
            </div>
        );
    }
}
