import {createAsyncThunk} from "@reduxjs/toolkit";
import {register} from "../../utilits/api.js";
import {signIn} from "./login.js";

export const signUp = createAsyncThunk(
    "user/register",
    async (user, thunkAPI) => {
        try {
            const response  = await register(user);

            if (response.status !== 200) {
                throw new Error('Ошибка при регистрации')
            }

            await thunkAPI.dispatch(signIn(user))
            return response.data;

        } catch (error) {
            const errorParse = JSON.parse(error.request.response)
            return thunkAPI.rejectWithValue(errorParse.error);
        }
    },
);