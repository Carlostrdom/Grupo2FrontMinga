import { createAsyncThunk , createAction} from "@reduxjs/toolkit";
import axios from "axios";

const setCategory = createAction("SET_CATEGORY");

const fetchcategory = createAsyncThunk("category/fetchcategory", async ( ) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/category/all`);
        return response.data.response;
        
    } catch (error) {
        
        console.error("Error fetching categories:", error);
        return rejectWithValue(error.response?.data || 'Error fetching categories');
    }
});

export { fetchcategory, setCategory };