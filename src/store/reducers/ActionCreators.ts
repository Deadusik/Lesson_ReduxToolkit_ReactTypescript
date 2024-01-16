import axios from "axios";
import { IUser } from "../../models/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://j1sonplaceholder.typicode.com/users')
            return response.data
        } catch (e) {
            if (e instanceof Error)
                return thunkAPI.rejectWithValue(e.message)
            else
                console.log('Unhandled error:', e)
        }
    }
)