export const addCart = (productId)=>{
    return (dispatch)=>{
        dispatch({
            type: 'addId',
            payload: productId
        })
    }

}

export const removeCart = (productId)=>{
    return (dispatch)=>{
        dispatch({
            type: 'removeId',
            payload: productId
        })
    }

}