import { createReducer } from "@reduxjs/toolkit";
import { fetchcategory } from "../../action/actionhome/actionhome";

const initialState = {
    category: [],  // Inicializamos la propiedad 'category' aquí
    loading: true,
    error: false,
};

const reduxHome = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchcategory.pending, (state) => {
            console.log("fetchcategory.pending");
            
            state.loading = true;
        })
        .addCase(fetchcategory.fulfilled, (state, action) => {
            state.loading = false;
            state.category = action.payload;  
            
        })
        .addCase(fetchcategory.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
            
        });
});

export default reduxHome;
