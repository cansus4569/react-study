let initialState = {
    count: 0,
    id:"",
    password:""
}

function reducer(state = initialState, action) {
    console.log("action : ", action);
    if (action.type === "INC") {
        return { ...state, count: state.count + action.payload.num }
    } else if (action.type === "LOGIN") {
        return {
            ...state,
            id:action.payload.id,
            password:action.payload.password
        }
    } else if (action.type === "DEC") {
        return {
            ...state,
            count: state.count - action.payload.num
        }
    }

    return { ...state }
}

export default reducer;