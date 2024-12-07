import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const newAuthor = createAsyncThunk("AUTHOR_CREATE", async ({ name, lastname, city,country, date, photo }, { rejectWithValue }) => {
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

        const response = await axios.post("http://localhost:8080/api/author/create", author);
        return response.data;
    } catch (error) {
        console.error("Error en la creación del autor:", error.response || error.message);
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
})

export { newAuthor };