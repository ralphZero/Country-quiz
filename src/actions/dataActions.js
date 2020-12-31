export const addData = (data) => {
    return {
        type : 'ADD_DATA',
        data : data
    }
}

export const updateStarted = (value) => {
    return {
        type : 'UPDATE_STATUS',
        value : value
    }
}

export const generateQuestion = () => {
    return {
        type : 'GENERATE_QUESTION'
    }
}
export const updateScore = () => {
    return {
        type : 'UPDATE_SCORE'
    }
}