import {createAsyncThunk} from "@reduxjs/toolkit";
import {login} from "../../utilits/api.js";

export const signIn = createAsyncThunk(
    "user/login",
    async (user, thunkAPI) => {
        try {
            const response = await login(user);
            document.cookie = `token=${response.data.token}; path=/; max-age=172800000`
            if (response.status !== 200) {
                throw new Error('Нет такого пользователя')
            }

            return response.data


        } catch (error) {
            const errorParse = JSON.parse(error.request.response)
            return thunkAPI.rejectWithValue(errorParse.error);
        }
    },
);