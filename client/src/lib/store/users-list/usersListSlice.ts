// store/users/usersSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {UserType} from "@Types/user";
import {api} from "@Lib/api";
import {UsersState} from "./usersListType";



const initialState: UsersState = {
    entities: {},
    ids: [],
    currentPage: 0,
    status: 'idle',
    error: null,
    totalPage: 1,
    hasMore: true
};

export const loadPage = createAsyncThunk(
    'usersList/loadPage',
    async (page: number, { rejectWithValue }) => {
        try {
            const response = await api.getUserList(page);
            return { page, users: response.data.users, totalPage: response.data.PAGE_COUNT };
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const updateUser = createAsyncThunk(
    'usersList/updateUser',
    async (user:Partial<UserType>, { rejectWithValue }) => {
        try {
            const response = await api.updateUser(user);
            return response.data.updateUser;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const usersListSlice = createSlice({
    name: 'usersList',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Обработка загрузки страницы
            .addCase(loadPage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadPage.fulfilled, (state, action) => {
                const { users, totalPage } = action.payload;
                const newEntities = { ...state.entities };

                users.forEach((user:UserType) => {
                    newEntities[user.id] = user;
                });

                // users.forEach((user:UserType)=>{
                //     state.entities = Object.assign({...state.entities},{[user.id] : user})
                // })
                state.totalPage = totalPage;
                if(state.currentPage === state.totalPage){
                    state.hasMore = false
                }
                state.entities = newEntities;
                state.status = 'success';
            })
            .addCase(loadPage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })

            // Обработка обновления пользователя
            .addCase(updateUser.fulfilled, (state, action) => {
                const updatedUser = action.payload;
                if (state.entities[updatedUser.id]) {
                    state.entities[updatedUser.id] = {
                        ...state.entities[updatedUser.id],
                        ...updatedUser,
                    };
                }
            });
    },
});



export const { actions: usersListActions, reducer: usersListReducer } = usersListSlice;