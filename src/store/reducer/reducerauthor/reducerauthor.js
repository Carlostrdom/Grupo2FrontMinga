import { createReducer } from "@reduxjs/toolkit";
import { fetchAutorCompany } from "../../action/actionauthor/actionauthor";

const initialState = {
    author: [],  
    loading: true,
    error: false,
};

const reduxHome = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchAutorCompany.pending, (state) => {
            console.log("fetchAutorCompany.pending");
            
            state.loading = true;
        })
        .addCase(fetchAutorCompany.fulfilled, (state, action) => {
            state.loading = false;
            state.author = action.payload;  
            
        })
        .addCase(fetchAutorCompany.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
            
        });
});

export default reduxHome;
