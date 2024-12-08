import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchAutorCompany= createAsyncThunk("home/fetchAutorCompany", async ( ) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/manga/mangaAuthorOrCompany`);
        return response.data.response; 
    } catch (error) {
        console.error("Error fetching categories:", error);
        return rejectWithValue(error.response?.data || 'Error fetching categories');
    }
});

export { fetchAutorCompany};
