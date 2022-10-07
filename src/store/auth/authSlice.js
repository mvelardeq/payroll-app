import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status:'', //authenticated, no-authenticated,checking
    uid:null,
    displayName:null,
    email:null,
    photoURL:null,
    errorMessage:null
}   

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        chekingCredencials:(state)=>{
            state.status='checking'
        }
    }
})

export const  {chekingCredencials} = authSlice.actions