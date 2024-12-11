import { createReducer } from "@reduxjs/toolkit";
import { login, setUser,logout, createAuthor, newCompany, setAuthor, setCompany } from "../../action/actionsignin/actionsignin";

const initialState = {  
    loading: false,
    error: false,
    user: null,
    token: null,
    role: null,
    author: [],
    company: [],

};

 const reducerSignin = createReducer(initialState,(builder) => {
    builder.addCase(login.fulfilled,(state,action)=>{    
        state.loading = false;
        state.error = false;
        console.log(action.payload, "action.payload redux");
        
        state.user = action.payload.user;
        state.token = action.payload.token
        localStorage.setItem("token", action.payload.token);
        state.role = action.payload.user.role
        state.company = action.payload.company
        state.author = action.payload.author

    })
    .addCase(login.pending,(state,action)=>{     
        state.loading = true,
        state.error = false,
        state.user = null,
        state.token = null
    })
    .addCase(login.rejected,(state,action)=>{
       
        localStorage.removeItem("token");
        state.loading = false,
        state.error = true,
        state.user = null,
        state.token = null
    })

    .addCase(setUser,(state,action)=>{    
        state.author = action.payload.author,
        state.company = action.payload.company,
        state.user = action.payload.user,
        state.role = action.payload.user.user ? action.payload.user.user.role : action.payload.user.role,
        state.token = action.payload.token || localStorage.getItem("token") 
        action.payload.token && localStorage.setItem("token", action.payload.token);
    })

    .addCase(logout,(state,action)=>{
        localStorage.removeItem("token");
        state.user = null,
        state.token = null
        state.role = null
    }).addCase(createAuthor.fulfilled,(state,action)=>{
        state.role = 1
        state.author = action.payload;
        state.loading = false;
        state.error = false;       
        
    }).addCase(createAuthor.pending,(state,action)=>{
        state.loading = true;
        state.error = false;
        state.author = [];
    }).addCase(createAuthor.rejected,(state,action)=>{
        state.loading = false;
        state.error = true;
        state.author = [];
    }).addCase(newCompany.fulfilled,(state,action)=>{
        state.role = 2
        state.company = action.payload;
        state.loading = false;
        state.error = false;       
        
    }).addCase(newCompany.pending,(state,action)=>{
        state.loading = true;
        state.error = false;
        state.company = [];
    }).addCase(newCompany.rejected,(state,action)=>{
        state.loading = false;
        state.error = true;
        state.company = [];
    }).addCase(setAuthor,(state,action)=>{
        state.author = action.payload

        
    }).addCase(setCompany,(state,action)=>{
        state.company = action.payload})
})

export default reducerSignin;
