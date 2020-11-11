import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {addTodo, clearTodos} from "./actions";

import Todo from "./Components/Todo";

import './Styles/App.css';

function App() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState(false);

    return <div className='App'>
        <h1 style={{textAlign: 'center'}}>Todo App</h1>

        {/* Render todos */}

        <div className='todo-list'>
            {
                todos.map((todo, index) => <Todo
                    todo={todo}
                    index={index}
                    key={index}
                />)
            }
        </div>


        <div style={{display: 'flex', flexDirection: 'column', margin: '1em 20% 1em 20%'}}>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            {
                inputError
                    ?
                    <p style={{ color: 'red', textAlign: 'center' }}> Field cannot be empty! </p>
                    :
                    null
            }

            <button
                style={{marginTop: '1em'}}
                onClick={() => {
                    if (inputValue === '') {
                        setInputError(true);
                    } else {
                        setInputError(false);
                        dispatch(addTodo(inputValue));
                        setInputValue('');
                    }
                }}
            >
                Add Todo
            </button>

            <button
                style={{marginTop: '1em'}}
                onClick={() => {
                    dispatch(clearTodos())
                }}
            >
                Clear All Todos
            </button>
        </div>
    </div>
}

export default App;
