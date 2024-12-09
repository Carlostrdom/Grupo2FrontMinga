import {  createAsyncThunk,createAction } from "@reduxjs/toolkit";
import axios from "axios";

const selectChapter = createAction("SELECT_CHAPTER");

const fetchchapter = createAsyncThunk("chapter/fetchchapter", async (manga_id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/chapter/mangaId/${manga_id}`);
        console.log(response.data, "response.data.response chapter");
        return response.data.response; // Esto debería ser un array de capítulos
    } catch (error) {
        console.error("Error fetching chapters:", error);
        return rejectWithValue(error.response?.data || 'Error fetching chapters');
    }
});


export  {fetchchapter, selectChapter}; ;