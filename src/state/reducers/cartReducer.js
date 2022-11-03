const reducer = (state = [], action) => {
    if (action.type === 'addId') {
         state.push(action.payload)
         return state

    }
    else if (action.type === 'removeId') {
        return state.filter(id => { return id !== action.payload })
    }
    else {
        return state;
    }
}

export default reducer