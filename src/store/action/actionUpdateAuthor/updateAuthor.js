import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const updateAuthor = createAsyncThunk("USER_CREATE", async ({ name,
    lastname,
    city,
    country,
    date,
    photo,
    active,}, { rejectWithValue }) => {
    try {
        const author = {

            name,
            lastname,
            city,
            country,
            date,
            photo,
            active,
        };
        const response = await axios.put("http://localhost:8080/api/author/update", author);
        return response.data;
    } catch (error) {
        console.error("Error en la creación del usuario:", error.response || error.message);
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
});

export { updateAuthor };