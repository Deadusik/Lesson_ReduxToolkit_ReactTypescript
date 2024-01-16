import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../models/IUser"
import { fetchUsers } from "./ActionCreators"
import { AsyncThunkRejectedActionCreator } from "@reduxjs/toolkit/dist/createAsyncThunk"

interface IUserState {
    users: IUser[]
    isLoading: boolean
    error: string
}

const initialState: IUserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true
        },
        usersSuccess(state, action: PayloadAction<IUser[]>) {
            state.isLoading = false
            state.users = action.payload
            state.error = ''
        },
        usersError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending.type, (state) => {
                state.isLoading = true;
                state.users = [];
                state.error = '';
            })
            .addCase(fetchUsers.fulfilled.type, (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.users = action.payload;
                state.error = '';
            })
            .addCase(fetchUsers.rejected.type, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.users = [];
                state.error = action.payload;
            })
    }
})

export default userSlice.reducer