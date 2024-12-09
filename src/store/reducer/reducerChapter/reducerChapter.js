import { createReducer } from "@reduxjs/toolkit";
import fetchchapter  from "../../action/actionChapter/actionChapter";

const initialState = {
    chapters: [],
    loading: true,
    error: null,
};

const reducerChapter = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchchapter.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchchapter.fulfilled, (state, action) => {
            state.loading = false;
            state.chapters = action.payload;
        })
        .addCase(fetchchapter.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});

export default reducerChapter;