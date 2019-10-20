import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions/TodoActions";

class AddTodo extends React.Component<any, any> {
  constructor(props :any) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input:any) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    this.props.addTodo(this.state.input);

    // sets state back to empty string
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        {/* <h1>Get Pokemons</h1>
        <button onClick={getPokemons}>
        Get Pokemons
        </button> */}
        <hr></hr>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}


// addTodo is an action defined in actions.tsx

const mapDispatchToProps = {
  addTodo
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);