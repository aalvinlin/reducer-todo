const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Task 2',
        completed: true,
        id: 684684
    },
    {
        item: 'Task 3',
        completed: true,
        id: 23472457
    },
    {
        item: 'Task 4',
        completed: false,
        id: 32498756134
    },
    {
        item: 'Task 5',
        completed: false,
        id: 9689845
    },
    {
        item: 'Task 6',
        completed: true,
        id: 96845231
    },
    {
        item: 'Task 7',
        completed: false,
        id: 12361686
    },
];

const taskReducer = (state, action) => {
    switch (action.type)
    {
        case "ADD_TASK":
            return [ ...state, {item: action.payload.item, completed: false, id: Date.now()} ];
        
        case "DELETE_TASK":
            return state.filter(item => item.id !== action.payload.id);
            
        case "TOGGLE_COMPLETION_STATUS":
            return state.map(item => {

                if (item.id === action.payload.id)
                    { return { ...item, completed: true } }
                else
                    { return item }
            })

        default:
            return state;
    }
}

export { initialState, taskReducer };