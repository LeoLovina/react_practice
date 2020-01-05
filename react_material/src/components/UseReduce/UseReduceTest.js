import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const initialDotos = [
    {
        id: 1,
        task: 'todo 1',
        completed: false,
        value:'check1'
    },
    {
        id: 2,
        task: 'todo 2',
        completed: false,
        value:'check2'
    }
];

const todoReducer = (state, action) => {
    switch (action.type) {
      case 'DO_TODO':
        return state.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, completed: true };
          } else {
            return todo;
          }
        });
      case 'UNDO_TODO':
        return state.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, completed: false };
          } else {
            return todo;
          }
        });
      default:
        return state;
    }
  };
  

export default function UseReduceTest() {
    // const [value, setVaue] = useState(true);
    //const [value, setValue] = useState(initialDotos);

    const [todos, dispatch] = React.useReducer(
        todoReducer,
        initialDotos
      );

    // const handleCheckbox = name => event => {
    //     console.log({...value});
    //   //  setValue({...value, [name]: event.target.checked});
    //     console.log({...value});
    // }

    const handleCheckbox = todo => {
        dispatch({ 
            type: todo.completed ? 'UNDO_TODO' : 'DO_TODO', 
            id: todo.id });
      };
    
    return (
        <FormGroup>
            <FormLabel>useReduce Test</FormLabel>
            {todos.map((item, key) => 
                <FormControlLabel key={key} control={<Checkbox
                    //onClick={handleCheckbox(item)}
                    onChange={() => handleCheckbox(item)}
                    value={item.value}
                    checked={item.completed}></Checkbox>}
                    label={item.task}>
                </FormControlLabel>
            )}
        </FormGroup>
    );
}