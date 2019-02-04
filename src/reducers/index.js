import { combineReducers } from 'redux';

import { ADD_TODO } from '../actions';

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        default:  
            return state;
    }
}

// function todoApp(state = initialState, action) {
//     switch (action.type) {
//         case ADD_TODO:
//             return Object.assign({}, state, {
//                 todos: todos(state.todos, action)
//             })
//             default: 
//             // se o estado for undefined irá ser atribuido o initialState ao state
//             return state;
//     }
// }

const todoApp = combineReducers({
    todos
});

export default todoApp;


