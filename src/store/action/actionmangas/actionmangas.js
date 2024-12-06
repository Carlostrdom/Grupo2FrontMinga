import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setSearch = createAction("SET_SEARCH");

const fetchmangas = createAsyncThunk("mangas/fetchmangas", async (mangas) => {
    try {
        const testSearch = mangas && mangas.search ? mangas.search : "";
        const testCategory = mangas && mangas.category ? mangas.category : "";
        

        const url = mangas && (testSearch || testCategory )
            ? `http://localhost:8080/api/manga/all?search=${testSearch}&&category=${testCategory}`
            : "http://localhost:8080/api/manga/all";

        const response = await axios.get(url);


        return response.data.response;
    } catch (error) {
        console.error("Error fetching mangas:", error);
        throw error;
    }
});

export { setSearch,  fetchmangas };