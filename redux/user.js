import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: {
        access: "",
        refresh: ""
    },
    user:{
        first_name: "",
        last_name: "",
        email: "",
        image: "" ,
        gender: "",
        username: "",
        id: parseInt("")
    }

}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addToken: (state, action) =>{
            state.token = {...action.payload}
        },

        logout: (state) =>{
            state.token = {
                access: "",
                refresh: ""
            }

            state.user = {
                first_name: "",
                last_name: "",
                email: "",
                image: "" ,
                id: parseInt(""),
                gender: "",
                username: ""
            }
        },

        userInfo: (state, {payload}) =>{
            state.user = {...payload}
        }


    }

})

export const {addToken, logout, userInfo} = userSlice.actions;

export default userSlice.reducer