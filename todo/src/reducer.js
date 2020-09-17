export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const TOGGLE_COMPLETED_TODO_ITEM = 'TOGGLE_COMPLETED_TODO_ITEM';
export const CLEAR_ALL_COMPLETED_ITEMS = 'CLEAR_ALL_COMPLETED_ITEMS';
export const OVERDUE = 'OVERDUE';

export const initialState = {

    todoItems : [
        {
            todoItem: 'Sleep',
            id: 1,
            completed: false,
            timestampDue: "0916202000001",
        },
        {
            todoItem: 'Exercise',
            id: 555,
            completed: false,
            timestampDue: "0825202000002",
        },
        {
            todoItem: 'Bake apple strudel',
            id: 88,
            completed: false,
            timestampDue: "1011202000003",
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
                timestampDue: Date.now(),
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
        
        case OVERDUE:
            return {
                ...state,
                todoItems: state.todoItems.map(item => {
                    if (item.timestampDue < Date.now()) {
                        return {
                            ...item,
                            timestampDue: "OVERDUE",
                        }
                    }
                })
            }
        
        default:
                return state
    }
}