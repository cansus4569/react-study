import { authActions } from "../reducers/authSlice";

function login(id, password) {
    return (dispatch, getState) => {
        console.log("login success action");
        dispatch(authActions.loginSuccess({ id, password }));
    }
}

export const authAction = { login }