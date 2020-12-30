const initState = {
    started : false,
    data : []
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'ADD_DATA'){
        return {
            ...state,
            data : action.data
        }
    }
    if(action.type === 'UPDATE_STATUS'){
        return {
            ...state,
            started : action.value
        }
    }
    return state;
}

export default rootReducer;