import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Acción asíncrona para crear un usuario
const createUser = createAsyncThunk("USER_CREATE", async ({ email, password, photo, online, role}, { rejectWithValue }) => {
    try {
        // Creación del objeto de usuario
        const user = {
            
            email,
            password,
            photo,         
            online: true,
            role: 0
        };

       
        const response = await axios.post("http://localhost:8080/api/users/register", user);

       

        return response.data;
    } catch (error) {
        console.error("Error en la creación del usuario:", error.response || error.message);
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
});

export { createUser };
