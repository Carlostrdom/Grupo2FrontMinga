import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const newCompany = createAsyncThunk(
    "COMPANY_CREATE",
    async ({ name, user_id, website,description, photo, active }, { rejectWithValue }) => {
      try {
        const company = {
          name,
          user_id,
          website,
          description,
          photo,
          active,
        };
  
        const response = await axios.post("http://localhost:8080/api/company/create", company);
        return response.data;
      } catch (error) {
        console.error("Error en la creación de la compañía:", error.response || error.message);
        return rejectWithValue(error.response ? error.response.data : error.message);
      }
    }
  );
  
  export { newCompany };