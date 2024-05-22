import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userDetails",
    initialState: {username: "Sayan", email: "sayan102@mail.com"},
    reducers: {
        updateUser: (state, action)=>{
            state.username = action.payload
        },
        updateMail: (state, action)=>{
            state.email = action.payload;
        }
    }
})

export const {updateUser, updateMail} = userSlice.actions;
export default userSlice;