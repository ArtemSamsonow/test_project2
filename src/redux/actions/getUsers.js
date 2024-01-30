import {createAsyncThunk} from "@reduxjs/toolkit";
import {getUsers} from "../../utilits/api.js";

export const getUsersAccount = createAsyncThunk(
    "user/getUsersAccount",
    async (page,thunkAPI) => {
        try {
            const response = await  getUsers(page);

            if (response.status !== 200) {
                throw new Error('Что-то пошло не так')
            }
            return response.data

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    },
);