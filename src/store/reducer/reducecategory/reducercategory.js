import { createReducer } from "@reduxjs/toolkit";
import { fetchcategory, setCategory } from "../../action/actioncategory/actioncategory";

const initialState = {
        category: [],
        loading: true,
        error: false,
        selecCategory: ""

    };
    
    const reduxCategory = createReducer(initialState, (builder) => {
        builder
            .addCase(fetchcategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchcategory.fulfilled, (state, action) => {
                state.loading = false;
                state.category = action.payload;
                console.log(action.payload,"mensaje de la accion");
                
            })
            .addCase(fetchcategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                console.log("fallo");
                
            }).addCase(setCategory, (state, action) => {
                state.selecCategory = action.payload;
            })
    });
    
    export default reduxCategory;