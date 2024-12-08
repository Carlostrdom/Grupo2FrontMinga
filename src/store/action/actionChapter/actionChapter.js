import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchchapter = createAsyncThunk("chapter/fetchchapter",async (_id, { rejectWithValue }) => {
try {
    const response = await axios.get(`http://localhost:8080/api/chapter/chapterId/${_id}`);
    console.log(response.data.response, "response.data.response chapter");
    
    return response.data.response;
} catch (error) {
    console.error("Error fetching itineraries:", error);
            return rejectWithValue(error.response?.data || 'Error fetching itineraries');
}    
});

export default fetchchapter ;