import { createReducer } from "@reduxjs/toolkit";
import {updateAuthor}  from "../../action/actionUpdateAuthor/updateAuthor";

const initialState = {
    author: [],
    loading: true,
    error: null,
};

const reducerAuthor = createReducer(initialState, (builder) => {
    builder
        .addCase(updateAuthor.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateAuthor.fulfilled, (state, action) => {
            state.loading = false;
            state.chapters = action.payload;
        })
        .addCase(updateAuthor.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
});

export default reducerAuthor;