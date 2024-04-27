import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    id: '',
    password: '',
    auth: false
}

// function authReducer(state = initialState, action) {
//     let { type, payload } = action;

//     switch (type) {
//         case "LOGIN_SUCCESS":
//             console.log("login success reducer");
//             return { ...state, id: payload.id, password: payload.password, auth: true };
//         default:
//             return { ...state };
//     }
// }

// export default authReducer;

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.id = action.payload.id;
            state.password = action.payload.password;
            state.auth = true;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;
