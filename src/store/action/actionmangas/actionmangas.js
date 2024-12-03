import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setSearch = createAction("SET_SEARCH");
const selectMangas = createAction("SELECT_MANGA");

const fetchmangas = createAsyncThunk("mangas/fetchmangas", async (mangas) => {
    try {
   

        const url = mangas.search != ""
            ? `http://localhost:8080/api/manga/all?search=${mangas.search}`
            : "http://localhost:8080/api/manga/all";

        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        console.error("Error fetching mangas:", error);
        throw error;
    }
});

export { setSearch, selectMangas, fetchmangas };