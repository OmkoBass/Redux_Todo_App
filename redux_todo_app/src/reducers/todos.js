const todosReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return state = [...state, action.payload ];
        case 'REMOVE_TODO':
            return state = state.filter(todo => todo !== action.payload)
        case 'CLEAR_TODOS':
            return [];
        default:
            return state;
    }
}

export default todosReducer;
