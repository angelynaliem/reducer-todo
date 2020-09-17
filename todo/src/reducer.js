export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const TOGGLE_COMPLETED_TODO_ITEM = 'TOGGLE_COMPLETED_TODO_ITEM';
export const CLEAR_ALL_COMPLETED_ITEMS = 'CLEAR_ALL_COMPLETED_ITEMS';

export const initialState = {

    todoItems : [
        {
            todoItem: 'Sleep',
            id: 1,
            completed: false,
        },
        {
            todoItem: 'Exercise',
            id: 555,
            completed: false,
        },
        {
            todoItem: 'Bake apple strudel',
            id: 88,
            completed: false,
        },

    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO_ITEM:
            const newTodoItem = {
                todoItem: action.payload,
                id: Date.now(),
                completed: false,
            }
            return {
                ...state,
                todoItems: [...state.todoItems, newTodoItem]
            }
        
        case TOGGLE_COMPLETED_TODO_ITEM:
            return {
                ...state,
                todoItems: state.todoItems.map(item => {
                    if (action.payload === item.id) {
                        return {
                            ...item,
                            completed: !item.completed,
                        }
                    }
                  return item  
                })
            }
        case CLEAR_ALL_COMPLETED_ITEMS:
            return {
                ...state,
                todoItems: state.todoItems.filter(item => !item.completed)
            }
            default:
                return state
    }
}