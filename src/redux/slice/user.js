import {createSlice} from "@reduxjs/toolkit";
import {getUsersAccount} from "../actions/getUsers.js";
import {signUp} from "../actions/register.js";
import {signIn} from "../actions/login.js";

const initialState = {
    users: {},
    totalPage: 1,
    loading: true,
    error: ''
}

export const userSlice= createSlice({
    name: 'user',
    initialState,

    reducers: {

    },

    extraReducers(builder) {
        builder
            ///// getUsersAccount
            .addCase(getUsersAccount.pending, (state) => {
                state.loading = true
            })
            .addCase(getUsersAccount.fulfilled, (state, action) => {
                state.users = action.payload.data
                state.totalPage = action.payload.total_pages
                state.loading = false
                state.error = ''
            })
            .addCase(getUsersAccount.rejected, (state) => {
                state.loading = false
                state.error = 'error'
            })
            ///// signUp
            .addCase(signUp.fulfilled, (state) => {
                state.loading = false
                state.error = ''
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            ///// signIn
            .addCase(signIn.fulfilled, (state) => {
                state.loading = false
                state.error = ''
                window.location.replace('/test_project2/')
            })
            .addCase(signIn.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

    }
})

export default userSlice.reducer