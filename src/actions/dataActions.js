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