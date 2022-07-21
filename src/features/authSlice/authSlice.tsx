import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
interface AuthState {
    name: string | null
    token: string | null
    user: string | null,

}
const initialState: AuthState = {
    name: null,
    token: null,
    user: null,
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ name: string, token: string }>) => {
            const { name, token } = action.payload
            localStorage.setItem(
                "user", JSON.stringify({ name, token })
            )
            // localStorage.setItem(
            //     "user", JSON.stringify({
            //         name: action.payload.name,
            //         token: action.payload.token
            //     })
            // )
            state.name = action.payload.name;
            state.token = action.payload.token;
        },
        logout: (state) => {
            localStorage.clear();
            state.name = null;
            state.token = null;
        },
////////////////////////////////////////////
        // Dave authentication
        setCredentials: (state, action: PayloadAction<{ user: string, accessToken: string }>) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state) => {
            state.user = null
            state.token = null
        }

    }
})

export const { setUser, logout, setCredentials, logOut } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth
export const selectAuthUser = (state: RootState) => state.auth.user
export const selectAuthToken = (state: RootState) => state.auth.token

export default authSlice.reducer;

export const selectCurrentUser = (state : RootState) => state.auth.user
export const selectCurrentToken = (state : RootState) => state.auth.token
