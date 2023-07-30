import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    phone: null,
    name: null,
    email: null,
    role: null,
    token: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.id = action.payload.id;
            state.phone = action.payload.phone;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.id = null;
            state.phone = null;
            state.name = null;
            state.email = null;
            state.role = null;
            state.token = null;
        },
        // Add other reducers if needed
    },

});


export const { login, logout } = userSlice.actions;

export default userSlice.reducer;