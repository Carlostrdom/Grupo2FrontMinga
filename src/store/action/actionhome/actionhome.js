import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchcategory = createAsyncThunk("home/fetchcategory", async ( ) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/category/all`);
        console.log( response.data.response,"Respuesta completa de la API");
        return response.data.response; 
    } catch (error) {
        console.error("Error fetching categories:", error);
        return rejectWithValue(error.response?.data || 'Error fetching categories');
    }
});

export { fetchcategory };
