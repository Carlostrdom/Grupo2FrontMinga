import { createReducer } from "@reduxjs/toolkit";
import { fetchmangas,  selectManga,  setSearch } from "../../action/actionmangas/actionmangas";

const initialState = {
    mangas: [],
    loading: true,
    error: false,
    search: "",
    selectedManga: {}
};

const reduxMangas = createReducer(initialState, (builder) => {
    builder.addCase(setSearch, (state, action) => {
        state.search = action.payload;
        
    }).addCase(fetchmangas.pending, (state) => {
        state.loading = true;
    }).addCase(fetchmangas.fulfilled, (state, action) => {
        state.loading = false;
        state.mangas = action.payload;
        
    }).addCase(fetchmangas.rejected, (state) => {
        state.loading = false;
        state.error = true;
    }).addCase(selectManga, (state, action) => {
        state.selectedManga = action.payload;
    })
});
export default reduxMangas;