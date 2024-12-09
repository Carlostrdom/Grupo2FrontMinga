import { createReducer } from "@reduxjs/toolkit";
import {fetchchapter, selectChapter}  from "../../action/actionChapter/actionChapter";

const initialState = {
    chapters: [],
    loading: true,
    error: null,
    selectChapter: {}
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
        }).addCase(selectChapter, (state, action) => {
            state.selectChapter = action.payload;
        });
});

export default reducerChapter;