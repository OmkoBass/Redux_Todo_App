import React from 'react'

import { useDispatch } from "react-redux";

import { removeTodo } from "../actions";

function Todo({ todo, index }) {
    const dispatch = useDispatch();

    return <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '1em' }}>
        <h4> {index + 1}. </h4>
        <h4> {todo} </h4>
        <button onClick={() => dispatch(removeTodo(todo))}> Clear </button>
    </div>
}

export default Todo;
