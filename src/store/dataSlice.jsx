import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:"tips-user",
    initialState:{
        userName:"",
        password:""
        },
        reducers:{
            setUserName:(state,action)=>{
                state.userName=action.payload;
        },
            setPassword:(state,action)=>{
            state.password=action.payload;
        }
    }
})

export const {setUserName,setPassword}=dataSlice.actions;
export default dataSlice.reducer;